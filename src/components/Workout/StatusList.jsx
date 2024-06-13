import { useContext } from "react";
import isEven from "../../helpers/generalFunctions";
import { ExerciseTheme, } from "../../Context";
export default function StatusList(_a) {
    var exerciseList = _a.exerciseList, currentExercise = _a.currentExercise;
    var exerciseTheme = useContext(ExerciseTheme).exerciseTheme;
    var lineColor = exerciseTheme === "light" ? "ddark" : "dmedium";
    var fillingColor = exerciseTheme === "mono" ? "dmedium" : "gradient-red";
    return (<div className="max-w-full overflow-hidden">
      <div style={{ transform: "translateX(-".concat(currentExercise * 6, "rem)") }} className="transition-all duration-700">
        <div className="translate-x-1/2">
          <div className="top-12 mt-8 flex w-fit -translate-x-4 flex-row items-center justify-center self-start overflow-hidden">
            {exerciseList.map(function (w, i) {
            console.log(w.exercise.id);
            return (<>
                  {i !== 0 && (<Connection reactKey={"Connection-".concat(w.exercise.id)} color={lineColor}/>)}
                  <div key={"dot-".concat(w.exercise.id)} className={"box-border h-8 w-8 rounded-full transition-all duration-1000 ".concat(i > currentExercise && "border-4 border-".concat(lineColor))}>
                    <div key={"filling-".concat(w.exercise.id)} className={"absolute rounded-full transition-opacity duration-1000 ".concat(i <= currentExercise
                    ? "h-8 w-8 bg-".concat(fillingColor, " opacity-100")
                    : "opacity-0")}/>
                  </div>
                </>);
        })}
            {isEven(length) && <div className="w-20"/>}
          </div>
        </div>
      </div>
    </div>);
}
function Connection(_a) {
    var reactKey = _a.reactKey, _b = _a.color, color = _b === void 0 ? "dmedium" : _b;
    return (<div key={"".concat(reactKey)} className={"h-0 w-16 border-t-4 border-dotted border-".concat(color)}></div>);
}
