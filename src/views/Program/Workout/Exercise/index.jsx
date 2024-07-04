import { useContext } from "react";
import { useNavigate, useOutletContext, } from "../../../node_modules/react-router-dom/dist/index";
import { ExerciseTheme, } from "@contexts/Context";
import Button from "@components/simple Components/Button";
import CountScreen from "@components/Page Components/ExercisePage/CountScreen";
import ExerciseCounter from "@components/Page Components/ExercisePage/ExerciseCounter";
export default function Exercise(_a) {
    var _b = useOutletContext(), currentExercise = _b.currentExercise, setCurrentExercise = _b.setCurrentExercise, numExercises = _b.numExercises, exercise = _b.exercise, pauseState = _b.pauseState;
    var _c = pauseState, pause = _c[0], setPause = _c[1];
    var _d = useContext(ExerciseTheme), exerciseTheme = _d.exerciseTheme, setExerciseTheme = _d.setExerciseTheme;
    var navigate = useNavigate();
    var isLast = currentExercise === numExercises - 1;
    var _e = exercise.exercise, name = _e.name, description = _e.description, id = _e.id;
    var type = exercise.reps ? "reps" : "duration";
    var count = exercise.reps ? exercise.reps : exercise.duration;
    var setNextExercise = function () {
        endPause();
        if (isLast) {
            navigate("../end/", { relative: "path" }); // Why is this just working with the relative?
        }
        else {
            navigate("../".concat(currentExercise + 1, "/"));
        }
    };
    var doPause = function () {
        setExerciseTheme("light");
        setPause(true);
    };
    var endPause = function () {
        setExerciseTheme("default");
        setPause(false);
    };
    if (pause) {
        // setTheme !
        return (<>
        <CountScreen currentExercise={currentExercise} numExercises={numExercises} endPause={endPause}>
          <ExerciseCounter key={"pause-".concat(id)} type={"duration"} count={15} id={"pause-".concat(id)} nextStep={setNextExercise}/>
        </CountScreen>
        <h1>Pause</h1>
        <Button bgColor="ddark" textColor="dlight" onClick={setNextExercise}>
          Überspringen
        </Button>
      </>);
    }
    return (<>
      <CountScreen currentExercise={currentExercise} numExercises={numExercises} endPause={endPause}>
        <ExerciseCounter key={"".concat(id)} type={type} count={count} id={id} nextStep={!isLast ? doPause : setNextExercise}/>
      </CountScreen>
      <h1>{name}</h1>
      {type === "reps" ? (<Button bgColor={isLast ? "gradient-red" : "dmedium"} textColor={isLast ? "ddark" : "dlight"} onClick={isLast ? setNextExercise : doPause}>
          geschafft
        </Button>) : (<p className="px-6 py-3 opacity-0">geschafft</p>)}
    </>);
}
