import { useContext, useEffect, useState } from "react";
import {
  useParams,
  useRouteLoaderData,
  useOutletContext,
} from "../../node_modules/react-router-dom/dist/index";
import ProgressCircle from "./ProgressCircle/ProgressCircle";

export default function Exercise(): React.JSX.Element {
  const exerciseIndex: Number = parseInt(useParams().exerciseIndex, 10); // did without deconstruction to be able to parse int.
  const setCurrentExercise: (int: Number) => void = useOutletContext();
  setCurrentExercise(exerciseIndex); // FIXME work around warning on first rendering!
  console.log(exerciseIndex);
  const exercise: Object =
    useRouteLoaderData("workout").data.workouts[0].exercises[exerciseIndex];
  const { name, description, id } = exercise.exercise;
  if (exercise.reps) {
    console.log(exercise);
    return <ExerciseWithReps reps={exercise.reps} />;
  } else if (exercise.duration) {
    console.log(exercise);
    return <ExerciseWithDuration duration={exercise.duration} id={id} />;
  }
}

function ExerciseWithReps({ reps }: { reps: number }): React.JSX.Element {
  return <p className="font-special text-6.5xl font-bold">{reps} x</p>;
}

function ExerciseWithDuration({
  duration,
  id,
}: {
  duration: number;
  id: String;
}): React.JSX.Element {
  // FIXME Find a proper way to animate this in React

  const [timeLeft, setTimeLeft]: [number, (n) => void] = useState(duration);

  useEffect(() => {
    console.log("start");
    setTimeLeft(duration);
    const reduceTime: () => void = () => {
      setTimeLeft((prevTimeLeft) => {
        return prevTimeLeft > 0 ? prevTimeLeft - 0.1 : 0;
      });
    };
    // setTimeLeft(duration);
    // let timeout: number = null;
    // for (let i = 0; i < duration; i += 0.1) {
    //   timeout = setTimeout(reduceTime, 100);
    //   clearTimeout(timeout);
    // }
    let interval = setInterval(reduceTime, 100);
    return () => {
      clearInterval(interval);
      console.log("stop");
    };
  }, [id]);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <ProgressCircle
        progress={(1 - timeLeft / duration) * 100}
        givenSize={"large"}
      >
        <h1>{Math.round(timeLeft)} sec</h1>
      </ProgressCircle>
    </div>
  );
}
