import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@contexts/Context";

export default function useUserContext() {
  const [user, setUser] = useContext(UserContext); // FIXME
  const [programIsFinished, setProgramIsFinished] = useState(false);
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
