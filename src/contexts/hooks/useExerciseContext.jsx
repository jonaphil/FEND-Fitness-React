import { useContext } from "react";

export default function useExerciseContext() {
  const exerciseDates = useContext();

  return {
    currentExerciseIndexState,
    exerciseThemeState,
    pauseState,
    currentExercise,
    numExercises,
  };
}
