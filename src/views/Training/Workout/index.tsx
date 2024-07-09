import React, { useState, Suspense } from "react";
import { Outlet, useParams, useLoaderData, Await } from "react-router-dom";
import { ExerciseTheme } from "@contexts/Context";
import Spinner from "@components/simple Components/Suspense/Spinner";
import StatusList from "@components/Page Components/WorkoutPage/StatusList";
import DescriptionCard from "@components/Page Components/WorkoutPage/DescriptionCard";
import Header from "@components/Page Components/WorkoutPage/Header";
import ErrorElement from "@components/simple Components/ErrorElement";

export default function Workout({}: {}): React.JSX.Element {
  const loaderData = useLoaderData();

  const [exerciseTheme, setExerciseTheme] = useState("default");
  const exerciseIndex: number = parseInt(useParams().exerciseIndex, 10);
  const [currentExercise, setCurrentExercise] = useState(exerciseIndex);
  if (currentExercise !== exerciseIndex) {
    setCurrentExercise(exerciseIndex);
  }
  const [pause, setPause] = useState(false) as [
    boolean,
    (arg0: boolean) => void
  ];
  if (pause === true && exerciseTheme === "default") {
    setExerciseTheme("light");
  } else if (pause === false && exerciseTheme === "light") {
    setExerciseTheme("default");
  }
  // const backgroundColor = exerciseTheme === "light" ? "dmedium" : "ddark";
  // const contextObject = {
  //   currentExerciseState: { currentExercise, setCurrentExercise },
  //   // exerciseThemeState: { exerciseTheme, setExerciseTheme },
  //   pauseState: { pause, setPause },
  // };
  return (
    <ExerciseTheme.Provider value={{ exerciseTheme, setExerciseTheme }}>
      <Suspense
        fallback={
          <div className="flex h-full w-full flex-col items-center justify-center">
            <Spinner />
          </div>
        }
      >
        <Await resolve={loaderData.promise} errorElement={<ErrorElement />}>
          {(promise) => (
            <WorkoutResolved
              promise={promise}
              currentExercise={currentExercise}
              pause={pause}
            >
              <Outlet
                context={{
                  currentExercise,
                  setCurrentExercise,
                  numExercises: promise.data.workouts[0].exercises.length,
                  exercise: promise.data.workouts[0].exercises[exerciseIndex],
                  pauseState: [pause, setPause],
                }}
              />
            </WorkoutResolved>
          )}
        </Await>
      </Suspense>
    </ExerciseTheme.Provider>
  );
}

function WorkoutResolved({ promise, currentExercise, pause, children }) {
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
            exerciseList={promise.data.workouts[0].exercises}
            currentExercise={currentExercise}
          />
        </div>
        {children}
      </div>
      {!pause && (
        <DescriptionCard
          name={
            promise.data.workouts[0].exercises[currentExercise].exercise.name
          }
          description={
            promise.data.workouts[0].exercises[currentExercise].exercise
              .description
          }
        />
      )}
    </>
  );
}
