import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import SET_USER_PROGRAM from "@adapters/graphQL/mutation/userData/SET_USER_PROGRAM";
import { UserContext } from "@contexts/Context";

export default function useUserContext() {
  const { user, setUser, idJWT, contextUserProgram, setContextUserProgram } =
    useContext(UserContext);
  const [setRemoteUserProgram] = useMutation(SET_USER_PROGRAM);
  const navigate = useNavigate();

  const setUserProgram = (program) => {
    const { id, name, duration, workoutsWithDay } = program;
    const { workout } = workoutsWithDay[0];
    setUser({
      ...user,
      current: {
        day: 1,
        programId: id,
        programName: name,
        length: duration * 7,
        progress: 0,
        workout: {
          id: workout.id,
          duration: workout.duration,
          focus: workout.category,
        },
      },
    });
    setContextUserProgram(program);
    setRemoteUserProgram({
      context: { authToken: idJWT, apiName: "hasura" },
      variables: {
        userId: user.id,
        currentProgramId: id,
      },
      onCompleted: () => {
        console.log("Program of user successfully updated on Server!");
      },
      onError: (e) => {
        console.log(e);
      },
    });
    navigate("/training/start/");
  };

  const resetUserProgram = () => {
    setUser((prevUser) => {
      return {
        ...prevUser,
        current: {},
      };
    });
  };

  const setUserWorkout = (day, program) => {};
  return {
    user,
    idJWT,
    contextUserProgram,
    setUserProgram,
    resetUserProgram,
    setUser,
  };
}
