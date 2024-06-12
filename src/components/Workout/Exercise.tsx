import { useContext, useEffect, useState } from "react";
import {
  useParams,
  useRouteLoaderData,
  useOutletContext,
  useNavigate,
} from "../../../node_modules/react-router-dom/dist/index";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

export default function Exercise(): React.JSX.Element {
  const exerciseList: Array<Object> =
    [...useRouteLoaderData("workout").data.workouts[0].exercises];
  const navigate = useNavigate();

  const exerciseIndex: number = parseInt(useParams().exerciseIndex, 10);
  const setCurrentExercise: (int: Number) => void = useOutletContext();
  setCurrentExercise(exerciseIndex); // FIXME work around warning on first rendering!

  const exercise: Object = exerciseList[exerciseIndex];
  const { name, description, id } = exercise.exercise;

  const setNextExercise = () => {
    if (exerciseIndex < exerciseList.length - 1) {
      navigate(`../${exerciseIndex + 1}`, {relative: "path"});
    } else {
      navigate(`../end`, {relative: "path"});
    }
  };

  if (exercise.reps) {
    return <ExerciseWithReps reps={exercise.reps} key={id} />;
  } else if (exercise.duration) {
    return (
      <ExerciseWithDuration
        duration={10} 
        key={id}
        setNextExercise={setNextExercise}
      />
      {/* instead of exercise.duration */}
    );
  }
}

function ExerciseWithReps({ reps }: { reps: number }): React.JSX.Element {
  return <p className="font-special text-6.5xl font-bold">{reps} x</p>;
}

function ExerciseWithDuration({
  duration,
  setNextExercise,
}: {
  duration: number;
  setNextExercise: () => void;
  }): React.JSX.Element {
  // FIXME Find a proper way to animate this in React

  const [timeLeft, setTimeLeft]: [number, (n) => void] = useState(duration);
  if (timeLeft === 0) {
    setNextExercise();
  }
  console.log(timeLeft);
  useEffect(() => {
    const reduceTime: () => void = () => {
      setTimeLeft((prevTimeLeft: number) => {
        return prevTimeLeft >= 0.1 ? prevTimeLeft - 0.1 : 0;
      });
    };
    let interval = setInterval(reduceTime, 100);
    return () => {
      clearInterval(interval);
      interval = null;
    };
  }, []);

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
