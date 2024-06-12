import isEven from "../../helpers/generalFunctions";
export default function StatusList(_a) {
    var length = _a.length, currentExercise = _a.currentExercise;
    var array = new Array(length).fill(0);
    return (<div className="max-w-full overflow-hidden">
      <div style={{ transform: "translateX(-".concat(currentExercise * 6, "rem)") }} className="transition-all duration-700">
        <div className="translate-x-1/2">
          <div className="top-12 mt-8 flex w-fit -translate-x-4 flex-row items-center justify-center self-start overflow-hidden">
            {array.map(function (w, i) {
            return (<>
                  {i !== 0 && <Connection reactKey={"Connection-".concat(i)}/>}
                  <div key={"dot-".concat(i)} className={"box-border h-8 w-8 rounded-full transition-all duration-1000 ".concat(i > currentExercise && "border-4 border-dmedium")}>
                    <div key={"filling-".concat(i)} className={"absolute rounded-full transition-opacity duration-1000 ".concat(i <= currentExercise
                    ? "h-8 w-8 bg-gradient-red opacity-100"
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
    var reactKey = _a.reactKey;
    return (<div key={"".concat(reactKey)} className=" h-0 w-16 border-t-4 border-dotted border-dmedium"></div>);
}
