import React, { useState, Suspense, useEffect } from "react";
import { Outlet, useParams, useLoaderData, Await } from "react-router-dom";
import { useReadQuery } from "@apollo/client";
import { ExerciseTheme, Workout } from "@contexts/Context";
import Spinner from "@components/simple Components/Suspense/Spinner";
import StatusList from "@components/Page Components/WorkoutPage/StatusList";
import DescriptionCard from "@components/Page Components/WorkoutPage/DescriptionCard";
import Header from "@components/Page Components/WorkoutPage/Header";
import ErrorElement from "@components/simple Components/ErrorElement";

export default function Workout({}: {}): React.JSX.Element {
  const loaderData = useLoaderData();
  const { data } = useReadQuery(loaderData);
  const [exerciseTheme, setExerciseTheme] = useState("default");
  const exerciseIndex: number = parseInt(useParams().exerciseIndex, 10);
  const [currentExercise, setCurrentExercise] = useState(exerciseIndex);
  const [pause, setPause] = useState(false) as [
    boolean,
    (arg0: boolean) => void
  ];
  if (currentExercise !== exerciseIndex) {
    setCurrentExercise(exerciseIndex);
  }
  if (pause === true && exerciseTheme === "default") {
    setExerciseTheme("light");
  } else if (pause === false && exerciseTheme === "light") {
    setExerciseTheme("default");
  }

  return (
    <ExerciseTheme.Provider value={{ exerciseTheme, setExerciseTheme }}>
      <WorkoutResolved
        data={data}
        currentExercise={currentExercise}
        pause={pause}
      >
        <Outlet
          context={{
            currentExercise,
            setCurrentExercise,
            numExercises: data?.workouts[0].exercises.length,
            exercise: data?.workouts[0].exercises[exerciseIndex],
            pauseState: [pause, setPause],
          }}
        />
      </WorkoutResolved>
    </ExerciseTheme.Provider>
  );
}

function WorkoutResolved({ data, currentExercise, pause, children }) {
  return (
    <>
      <div
        className={`relative flex h-screen w-screen shrink-0 flex-col items-center justify-between overflow-hidden pb-18 ${
          pause ? "bg-dmedium" : "bg-ddark"
        }`}
      >
        <Header />
        <div className="mt-9 w-full">
          <StatusList
            exerciseList={data.workouts[0].exercises}
            currentExercise={currentExercise}
          />
        </div>
        {children}
      </div>
      {!pause && (
        <DescriptionCard
          name={data.workouts[0].exercises[currentExercise].exercise.name}
          description={
            data.workouts[0].exercises[currentExercise].exercise.description
          }
        />
      )}
    </>
  );
}
