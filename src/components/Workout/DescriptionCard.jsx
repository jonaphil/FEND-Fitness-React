import { useContext, useState } from "react";
import { ExerciseTheme } from "../../Context";
import Button from "../Button";
export default function DescriptionCard(_a) {
    var name = _a.name, description = _a.description;
    var setExerciseTheme = useContext(ExerciseTheme).setExerciseTheme;
    var _b = useState(false), active = _b[0], setActive = _b[1];
    var toggleActive = function () {
        setActive(function (prevActive) {
            if (prevActive) {
                setExerciseTheme("default");
                return false;
            }
            setExerciseTheme("mono");
            return true;
        });
    };
    return (<div className={"relative bottom-0 flex h-3/4screen w-full shrink-0 justify-between rounded-t-3xl bg-dmedium transition-transform duration-500 ".concat(active
            ? "-translate-y-3/4screen flex-col items-center p-9 pb-28 pt-16 "
            : "-translate-y-14 flex-row items-start px-6 py-4")}>
      {active ? (<div className="flex w-full flex-col items-stretch gap-6 self-stretch opacity-100 transition-opacity duration-700">
          <h1 className="">{name}</h1>
          <p>{description}</p>
        </div>) : (<div className="w-7 opacity-0"/>)}
      <Button bgColor={"ddark"} textColor={"dlight"} small={active ? false : true} onClick={toggleActive}>
        {active ? "ok!" : "i"}
      </Button>
    </div>);
}
