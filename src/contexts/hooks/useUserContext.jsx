import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMutation } from "@apollo/client";
import SET_USER_PROGRAM from "@adapters/graphQL/mutation/userData/SET_USER_PROGRAM";
import { UserContext } from "@contexts/Context";

export default function useUserContext() {
  const [user, setUser, idJWT] = useContext(UserContext);
  const [programIsFinished, setProgramIsFinished] = useState(false);
  const [setUserProgramRemote] = useMutation(SET_USER_PROGRAM);
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
    setUserProgramRemote({
      context: { authToken: idJWT, apiName: "hasura" },
      variables: {
        userId: user.id,
        currentProgramId: id,
      },
      onCompleted: () => {
        console.log("userUpdate on Program successfully sent to Server!");
      },
      onError: (error) => {
        console.log(error);
      },
    });
    navigate("/training/start/");
  };

  const voteWorkout = (vote) => {
    // TODO Post Vote to Hasura
    console.log(`You voted ${vote} for this Workout!`);
  };
  const voteProgram = (vote) => {
    // TODO Post Vote to Hasura
    console.log(`You voted ${vote} for this Program!`);
  };

  const reviewWorkout = (vote) => {
    voteWorkout(vote);
    if (user.current.progress === user.current.length) {
      setProgramIsFinished(true);
    }
    // TODO
    // Check last day trained => if yesterday: {streak+1} if today: {} else: {streak = 1}
    // Update: Last time trained
    // Update: current.workout, progress
  };
  const reviewProgram = (vote) => {
    voteProgram(vote);
  };

  return {
    user,
    programIsFinished,
    setUserProgram,
    reviewWorkout,
    reviewProgram,
  };
}
