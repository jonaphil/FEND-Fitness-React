import React, { useState, Suspense } from "react";
import { Outlet, useParams, useLoaderData, Await } from "react-router-dom";
import { ExerciseTheme } from "@contexts/Context";
import Spinner from "@components/simple Components/Suspense/Spinner";
import StatusList from "@components/Page Components/WorkoutPage/StatusList";
import DescriptionCard from "@components/Page Components/WorkoutPage/DescriptionCard";
import Header from "@components/Page Components/WorkoutPage/Header";
import ErrorElement from "@components/simple Components/ErrorElement";
export default function Workout(_a) {
    var loaderData = useLoaderData();
    var _b = useState("default"), exerciseTheme = _b[0], setExerciseTheme = _b[1];
    var exerciseIndex = parseInt(useParams().exerciseIndex, 10);
    var _c = useState(exerciseIndex), currentExercise = _c[0], setCurrentExercise = _c[1];
    if (currentExercise !== exerciseIndex) {
        setCurrentExercise(exerciseIndex);
    }
    var _d = useState(false), pause = _d[0], setPause = _d[1];
    if (pause === true && exerciseTheme === "default") {
        setExerciseTheme("light");
    }
    else if (pause === false && exerciseTheme === "light") {
        setExerciseTheme("default");
    }
    // const backgroundColor = exerciseTheme === "light" ? "dmedium" : "ddark";
    // const contextObject = {
    //   currentExerciseState: { currentExercise, setCurrentExercise },
    //   // exerciseThemeState: { exerciseTheme, setExerciseTheme },
    //   pauseState: { pause, setPause },
    // };
    return (<ExerciseTheme.Provider value={{ exerciseTheme: exerciseTheme, setExerciseTheme: setExerciseTheme }}>
      <Suspense fallback={<div className="flex h-full w-full flex-col items-center justify-center">
            <Spinner />
          </div>}>
        <Await resolve={loaderData.promise} errorElement={<ErrorElement />}>
          {function (promise) { return (<WorkoutResolved promise={promise} currentExercise={currentExercise} pause={pause}>
              <Outlet context={{
                currentExercise: currentExercise,
                setCurrentExercise: setCurrentExercise,
                numExercises: promise.data.workouts[0].exercises.length,
                exercise: promise.data.workouts[0].exercises[exerciseIndex],
                pauseState: [pause, setPause],
            }}/>
            </WorkoutResolved>); }}
        </Await>
      </Suspense>
    </ExerciseTheme.Provider>);
}
function WorkoutResolved(_a) {
    var promise = _a.promise, currentExercise = _a.currentExercise, pause = _a.pause, children = _a.children;
    return (<>
      <div className={"relative flex h-screen w-screen shrink-0 flex-col items-center justify-between overflow-hidden pb-18 ".concat(pause ? "bg-dmedium" : "bg-ddark")}>
        <Header />
        <div className="mt-9 w-full">
          <StatusList exerciseList={promise.data.workouts[0].exercises} currentExercise={currentExercise}/>
        </div>
        {children}
      </div>
      {!pause && (<DescriptionCard name={promise.data.workouts[0].exercises[currentExercise].exercise.name} description={promise.data.workouts[0].exercises[currentExercise].exercise
                .description}/>)}
    </>);
}
