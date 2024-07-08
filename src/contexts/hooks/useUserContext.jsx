import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/Context";

export default function useUserContext() {
  const [user, setUser] = useContext(UserContext);
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
    //TODO Post changed Data for user to server!
    navigate("/training/start/");
  };

  return { user, setUserProgram };
}
