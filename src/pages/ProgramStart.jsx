import React from "react";
import { useContext } from "react";
import { ProgramContext } from "../Context";
export function ProgramStart() {
    var program = useContext(ProgramContext);
    return (<div className="justify-betweeen flex flex-col">
      <div className="flex flex-row justify-between">
        <div></div>
        <p className="text-2xs">{program.name}</p>
        <svg></svg>
      </div>
    </div>);
}
