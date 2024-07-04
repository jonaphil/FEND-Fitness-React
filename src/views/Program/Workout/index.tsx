import React, { useState } from "react";
import { Outlet, useParams, useLoaderData } from "react-router-dom";
import {
  ExerciseTheme,
  ExerciseWithReps,
  ExerciseWithDuration,
} from "@contexts/Context";
import StatusList from "@components/Page Components/WorkoutPage/StatusList";
import DescriptionCard from "@components/Page Components/WorkoutPage/DescriptionCard";
import Header from "@components/Page Components/WorkoutPage/Header";

export default function Workout({}: {}): React.JSX.Element {
  const exerciseList = useLoaderData().data.workouts[0].exercises;
  const numExercises = exerciseList.length;

  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseTheme, setExerciseTheme] = useState("default");

  const exerciseIndex: number = parseInt(useParams().exerciseIndex, 10);
  if (exerciseIndex !== currentExercise) {
    setCurrentExercise(exerciseIndex); // FIXME work around warning on first rendering!
  }

  const exercise: ExerciseWithDuration | ExerciseWithReps =
    exerciseList[exerciseIndex];
  const { name, description } = exercise.exercise;

  const [pause, setPause] = useState(false) as [
    boolean,
    (arg0: boolean) => void
  ];

  const backgroundColor = exerciseTheme === "light" ? "dmedium" : "ddark";
  return (
    <ExerciseTheme.Provider value={{ exerciseTheme, setExerciseTheme }}>
      <div
        className={`relative flex h-screen w-screen shrink-0 flex-col items-center justify-between overflow-hidden pb-18 bg-${backgroundColor}`}
      >
        <Header />
        <div className="mt-9">
          <StatusList
            exerciseList={exerciseList}
            currentExercise={currentExercise}
          />
        </div>
        <Outlet
          context={{
            currentExercise,
            setCurrentExercise,
            numExercises,
            exercise,
            pauseState: [pause, setPause],
          }}
        />
      </div>
      {!pause && <DescriptionCard name={name} description={description} />}
    </ExerciseTheme.Provider>
  );
}
