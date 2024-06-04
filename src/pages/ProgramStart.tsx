import React from "react";
import { useContext } from "react";
import Button from "../components/Button";
import { ProgramContext } from "../Context";

export interface Program {
  name: String;
  difficulty: "easy" | "moderate" | "hard";
  focus: "mobility" | "cardio" | "weightTraining" | "coordination";
  duration: Number;
  description: String;
  workoutsWithDay: Array<{
    id: String;
    day: Number;
    workout: {
      name: String;
      category: "mobility" | "cardio" | "weightTraining" | "coordination";
      duration: Number;
    };
  }>;
}

export function ProgramStart(): React.JSX.Element {
  const program: Program = useContext(ProgramContext);
  return (
    <div className="justify-betweeen flex flex-col">
      <div className="flex flex-row justify-between">
        <div></div>
        <p className="text-2xs">{program.name}</p>
        <svg></svg>
      </div>
    </div>
  );
}
