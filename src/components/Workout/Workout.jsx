import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import { Link, useLoaderData, } from "../../../node_modules/react-router-dom/dist/index";
import XClose from "../../media/icons/X-close.svg?react";
import ButtonLeft from "../../media/icons/ButtonLeft.svg?react";
import ButtonRight from "../../media/icons/ButtonRight.svg?react";
import StatusList from "./StatusList";
export default function Workout(_a) {
    // const program = useContext(ProgramContext) as ProgramType;
    // const currentExercise: number = 0;
    var _b = _a.currentExercise, currentExercise = _b === void 0 ? 0 : _b;
    // const { data, error, loading } = useLoaderData();
    // const exerciseList = data.workouts[0].exercises;
    var exerciseList = useLoaderData().data.workouts[0].exercises;
    var _c = useState(currentExercise), currentExerciseState = _c[0], setCurrentExercise = _c[1];
    return (<div className="flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-ddark">
      {/* create Element for Header */}
      <Header />
      <div className="mt-9">
        <StatusList length={exerciseList.length} currentExercise={currentExerciseState}/>
      </div>
      <ExerciseScreen currentExercise={currentExerciseState} numExercises={exerciseList.length}>
        <Outlet key={currentExercise} context={setCurrentExercise}/>
      </ExerciseScreen>
      <h1>{exerciseList[currentExerciseState].exercise.name}</h1>
      <DescriptionCard />
    </div>);
}
function Header(_a) {
    return (<div className="absolute box-border flex w-full flex-row justify-end pr-4 pt-4">
      <Link className={"h-3.5 w-4"} to={""}>
        <XClose />
      </Link>
    </div>);
}
function ExerciseScreen(_a) {
    var currentExercise = _a.currentExercise, numExercises = _a.numExercises, children = _a.children;
    return (<div className="box-border flex w-full flex-row items-center justify-between gap-8 px-8">
      {currentExercise > 0 ? (<Link to={"./".concat(currentExercise - 1)}>
          <ButtonLeft />
        </Link>) : (<div className="w-5"/>)}
      <>{children}</>
      {currentExercise + 1 < numExercises ? (<div className="w-5">
          <Link to={"./".concat(currentExercise + 1)}>
            <ButtonRight />
          </Link>
        </div>) : (<div className="w-5"/>)}
    </div>);
}
function DescriptionCard(_a) {
    var _b = _a.active, active = _b === void 0 ? false : _b, _c = _a.content, content = _c === void 0 ? "" : _c;
    return <div className="h-16 w-full rounded-t-3xl bg-dmedium"></div>;
}
