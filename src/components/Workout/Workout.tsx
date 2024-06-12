import React, { useState } from "react";
import { Outlet, useParams } from "react-router-dom";
import {
  Link,
  useLoaderData,
} from "../../../node_modules/react-router-dom/dist/index";
import XClose from "../../media/icons/X-close.svg?react";
import ButtonLeft from "../../media/icons/ButtonLeft.svg?react";
import ButtonRight from "../../media/icons/ButtonRight.svg?react";
import { ProgramContext, ProgramType } from "../../Context";
import StatusList from "./StatusList";

export default function Workout({
  currentExercise = 0,
}: {
  currentExercise: number;
  children: React.JSX.Element;
}): React.JSX.Element {
  // const program = useContext(ProgramContext) as ProgramType;
  // const currentExercise: number = 0;

  // const { data, error, loading } = useLoaderData();
  // const exerciseList = data.workouts[0].exercises;
  const exerciseList = useLoaderData().data.workouts[0].exercises;

  const [currentExerciseState, setCurrentExercise] = useState(currentExercise);

  return (
    <div className="flex h-screen w-screen flex-col items-center justify-between overflow-hidden bg-ddark">
      {/* create Element for Header */}
      <Header />
      <div className="mt-9">
        <StatusList
          length={exerciseList.length}
          currentExercise={currentExerciseState}
        />
      </div>
      <ExerciseScreen
        currentExercise={currentExerciseState}
        numExercises={exerciseList.length}
      >
        <Outlet key={currentExercise} context={setCurrentExercise} />
      </ExerciseScreen>
      <h1>{exerciseList[currentExerciseState].exercise.name}</h1>
      <DescriptionCard />
    </div>
  );
}

function Header({}): React.JSX.Element {
  return (
    <div className="absolute box-border flex w-full flex-row justify-end pr-4 pt-4">
      <Link className={"h-3.5 w-4"} to={``}>
        <XClose />
      </Link>
    </div>
  );
}

function ExerciseScreen({
  currentExercise,
  numExercises,
  children,
}: {
  currentExercise: number;
  numExercises: number;
  children: React.JSX.Element;
}): React.JSX.Element {
  return (
    <div className="box-border flex w-full flex-row items-center justify-between gap-8 px-8">
      {currentExercise > 0 ? (
        <Link to={`./${currentExercise - 1}`}>
          <ButtonLeft />
        </Link>
      ) : (
        <div className="w-5" />
      )}
      <>{children}</>
      {currentExercise + 1 < numExercises ? (
        <div className="w-5">
          <Link to={`./${currentExercise + 1}`}>
            <ButtonRight />
          </Link>
        </div>
      ) : (
        <div className="w-5" />
      )}
    </div>
  );
}

function DescriptionCard({
  active = false,
  content = "",
}: {
  active: Boolean;
  content: String;
}): React.JSX.Element {
  return <div className="h-16 w-full rounded-t-3xl bg-dmedium"></div>;
}
