import React from "react";
import { useContext } from "react";
import { Link } from "../../node_modules/react-router-dom/dist/index";
import Button from "../components/Button";
import { ProgramContext } from "../Context";
import ButtonGoBack from "../media/icons/ButtonGoBack.svg?react";
import germanTranslation from "../helpers/translations";
export function ProgramStart() {
    var program = useContext(ProgramContext);
    var currentDay = 1; // FIXME
    var currentWorkout = program.workoutsWithDay[(currentDay - 1) % program.workoutsWithDay.length]
        .workout;
    return (<div className="relative flex min-h-screen w-full flex-col items-center justify-between p-4 pb-16">
      <Header absolute={false} text={program.name}/>
      <div className="flex flex-col items-center gap-4">
        <h1>Tag {currentDay}</h1>
        <p className="text-xs">
          {"".concat(currentWorkout.duration, " Min. ").concat(String.fromCharCode(0x00b7), " ").concat(germanTranslation[currentWorkout.category])}
        </p>
      </div>
      <Link to={"../workout/".concat(currentWorkout.id, "/0")}>
        <Button>los</Button>
      </Link>
    </div>);
}
function Header(_a) {
    var absolute = _a.absolute, text = _a.text;
    return (<div className={"".concat(absolute && "absolute", " flex w-full flex-row justify-between")}>
      <div className="w-5"></div>
      <p className="justify-self-center text-2xs">{text}</p>
      <Link to={"../details"}>
        <ButtonGoBack />
      </Link>
    </div>);
}
