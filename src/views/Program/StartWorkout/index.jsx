import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "@contexts/hooks";
import { colors } from "@utils/styles/variables";
import Button from "@components/simple Components/Button";
import ButtonGoBack from "@assets/icons/ButtonGoBack.svg?react";
import germanTranslation from "@utils/helpers/translations";
export default function StartWorkout() {
    //FIXME Use UserContext instead of ProgramContext!
    var user = useUserContext().user;
    var id = user.id, current = user.current;
    var day = current.day, name = current.name, workout = current.workout;
    return (<div className="relative flex min-h-screen w-full flex-col items-center justify-between p-4 pb-16">
      <Header absolute={false} text={name}/>
      <div className="flex flex-col items-center gap-4">
        <h1>Tag {day}</h1>
        <p className="text-xs">
          {"".concat(workout.duration, " Min. ").concat(String.fromCharCode(0x00b7), " ").concat(germanTranslation[workout.focus])}
        </p>
      </div>
      <Link to={"../workout/".concat(workout.id, "/0")}>
        <Button>los</Button>
      </Link>
    </div>);
}
function Header(_a) {
    var absolute = _a.absolute, text = _a.text;
    var navigate = useNavigate();
    var goBackHandler = function () { return navigate(-1); };
    return (<div className={"".concat(absolute && "absolute", " flex w-full flex-row justify-between")}>
      <div className="w-5"></div>
      <p className="justify-self-center text-2xs">{text}</p>
      {/* <Link to={`../details`}> */}

      <button onClick={goBackHandler}>
        <ButtonGoBack color={"".concat(colors.dlight)}/>
      </button>
      {/* </Link> */}
    </div>);
}
