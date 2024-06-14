import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useLoaderData } from "../../../node_modules/react-router-dom/dist/index";
import { ExerciseTheme, } from "../../Context";
import StatusList from "./StatusList";
import DescriptionCard from "./DescriptionCard";
import Header from "./Header";
export default function Workout(_a) {
    var exerciseList = useLoaderData().data.workouts[0].exercises;
    var numExercises = exerciseList.length;
    var _b = useState(0), currentExercise = _b[0], setCurrentExercise = _b[1];
    var _c = useState("default"), exerciseTheme = _c[0], setExerciseTheme = _c[1];
    var exerciseIndex = parseInt(useParams().exerciseIndex, 10);
    if (exerciseIndex !== currentExercise) {
        setCurrentExercise(exerciseIndex); // FIXME work around warning on first rendering!
    }
    var exercise = exerciseList[exerciseIndex];
    var _d = exercise.exercise, name = _d.name, description = _d.description;
    var _e = useState(false), pause = _e[0], setPause = _e[1];
    var backgroundColor = exerciseTheme === "light" ? "dmedium" : "ddark";
    return (<ExerciseTheme.Provider value={{ exerciseTheme: exerciseTheme, setExerciseTheme: setExerciseTheme }}>
      <div className={"relative flex h-screen w-screen shrink-0 flex-col items-center justify-between overflow-hidden pb-18 bg-".concat(backgroundColor)}>
        <Header />
        <div className="mt-9">
          <StatusList exerciseList={exerciseList} currentExercise={currentExercise}/>
        </div>
        <Outlet context={{
            currentExercise: currentExercise,
            setCurrentExercise: setCurrentExercise,
            numExercises: numExercises,
            exercise: exercise,
            pauseState: [pause, setPause],
        }}/>
      </div>
      {!pause && <DescriptionCard name={name} description={description}/>}
    </ExerciseTheme.Provider>);
}
