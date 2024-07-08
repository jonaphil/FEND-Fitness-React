import React, { useState, Suspense } from "react";
import { Outlet, useParams, useLoaderData, Await } from "react-router-dom";
import {
  ExerciseTheme,
  ExerciseWithReps,
  ExerciseWithDuration,
} from "@contexts/Context";
import Spinner from "@components/simple Components/Suspense/Spinner";
import StatusList from "@components/Page Components/WorkoutPage/StatusList";
import DescriptionCard from "@components/Page Components/WorkoutPage/DescriptionCard";
import Header from "@components/Page Components/WorkoutPage/Header";
import ErrorElement from "@components/simple Components/ErrorElement";

export default function Workout({}: {}): React.JSX.Element {
  const loaderData = useLoaderData();
  const [currentExercise, setCurrentExercise] = useState(0);
  const [exerciseTheme, setExerciseTheme] = useState("default");
  const exerciseIndex: number = parseInt(useParams().exerciseIndex, 10);
  if (exerciseIndex !== currentExercise) {
    setCurrentExercise(exerciseIndex); // FIXME work around warning on first rendering!
  }
  const [pause, setPause] = useState(false) as [
    boolean,
    (arg0: boolean) => void
  ];
  const backgroundColor = exerciseTheme === "light" ? "dmedium" : "ddark";
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
          {(promise) => {
            return (
              <>
                <div
                  className={`relative flex h-screen w-screen shrink-0 flex-col items-center justify-between overflow-hidden pb-18 bg-${backgroundColor}`}
                >
                  <Header />
                  <div className="mt-9">
                    <StatusList
                      exerciseList={promise.data.workouts[0].exercises}
                      currentExercise={currentExercise}
                    />
                  </div>
                  <Outlet
                    context={{
                      currentExercise,
                      setCurrentExercise,
                      numExercises: promise.data.workouts[0].exercises.length,
                      exercise:
                        promise.data.workouts[0].exercises[exerciseIndex],
                      pauseState: [pause, setPause],
                    }}
                  />
                </div>
                {!pause && (
                  <DescriptionCard
                    name={
                      promise.data.workouts[0].exercises[exerciseIndex].exercise
                        .name
                    }
                    description={
                      promise.data.workouts[0].exercises[exerciseIndex].exercise
                        .description
                    }
                  />
                )}
              </>
            );
          }}
        </Await>
      </Suspense>
    </ExerciseTheme.Provider>
  );
}
