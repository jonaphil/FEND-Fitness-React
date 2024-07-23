import React, { useState } from "react";
import { Outlet, useParams, useLoaderData } from "react-router-dom";
import { useReadQuery } from "@apollo/client";
import { ExerciseTheme } from "@contexts/Context";
import StatusList from "@components/Page Components/WorkoutPage/StatusList";
import DescriptionCard from "@components/Page Components/WorkoutPage/DescriptionCard";
import Header from "@components/Page Components/WorkoutPage/Header";
export default function Workout(_a) {
    var loaderData = useLoaderData();
    var data = useReadQuery(loaderData).data;
    var _b = useState("default"), exerciseTheme = _b[0], setExerciseTheme = _b[1];
    var exerciseIndex = parseInt(useParams().exerciseIndex, 10);
    var _c = useState(exerciseIndex), currentExercise = _c[0], setCurrentExercise = _c[1];
    var _d = useState(false), pause = _d[0], setPause = _d[1];
    if (currentExercise !== exerciseIndex) {
        setCurrentExercise(exerciseIndex);
    }
    if (pause === true && exerciseTheme === "default") {
        setExerciseTheme("light");
    }
    else if (pause === false && exerciseTheme === "light") {
        setExerciseTheme("default");
    }
    return (<ExerciseTheme.Provider value={{ exerciseTheme: exerciseTheme, setExerciseTheme: setExerciseTheme }}>
      <WorkoutResolved data={data} currentExercise={currentExercise} pause={pause}>
        <Outlet context={{
            currentExercise: currentExercise,
            setCurrentExercise: setCurrentExercise,
            numExercises: data === null || data === void 0 ? void 0 : data.workouts[0].exercises.length,
            exercise: data === null || data === void 0 ? void 0 : data.workouts[0].exercises[exerciseIndex],
            pauseState: [pause, setPause],
        }}/>
      </WorkoutResolved>
    </ExerciseTheme.Provider>);
}
function WorkoutResolved(_a) {
    var data = _a.data, currentExercise = _a.currentExercise, pause = _a.pause, children = _a.children;
    return (<>
      <div className={"relative flex h-screen w-screen shrink-0 flex-col items-center justify-between overflow-hidden pb-18 ".concat(pause ? "bg-dmedium" : "bg-ddark")}>
        <Header />
        <div className="mt-9 w-full">
          <StatusList exerciseList={data.workouts[0].exercises} currentExercise={currentExercise}/>
        </div>
        {children}
      </div>
      {!pause && (<DescriptionCard name={data.workouts[0].exercises[currentExercise].exercise.name} description={data.workouts[0].exercises[currentExercise].exercise.description}/>)}
    </>);
}
