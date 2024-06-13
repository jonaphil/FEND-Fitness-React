var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
import { useEffect, useState } from "react";
import { useParams, useRouteLoaderData, useOutletContext, useNavigate, } from "../../../node_modules/react-router-dom/dist/index";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
export default function Exercise() {
    var exerciseList = __spreadArray([], useRouteLoaderData("workout").data.workouts[0].exercises, true);
    var navigate = useNavigate();
    var exerciseIndex = parseInt(useParams().exerciseIndex, 10);
    var setCurrentExercise = useOutletContext();
    setCurrentExercise(exerciseIndex); // FIXME work around warning on first rendering!
    var exercise = exerciseList[exerciseIndex];
    var _a = exercise.exercise, name = _a.name, description = _a.description, id = _a.id;
    var setNextExercise = function () {
        if (exerciseIndex < exerciseList.length - 1) {
            navigate("../".concat(exerciseIndex + 1), { relative: "path" });
        }
        else {
            navigate("../end", { relative: "path" });
        }
    };
    if (exercise.reps) {
        return <ExerciseWithReps reps={exercise.reps} key={id}/>;
    }
    else if (exercise.duration) {
        return (<ExerciseWithDuration duration={10} key={id} setNextExercise={setNextExercise}/>) /* instead of exercise.duration */;
        { /* instead of exercise.duration */ }
        ;
    }
}
function ExerciseWithReps(_a) {
    var reps = _a.reps;
    return <p className="font-special text-6.5xl font-bold">{reps} x</p>;
}
function ExerciseWithDuration(_a) {
    // FIXME Find a proper way to animate this in React
    var duration = _a.duration, setNextExercise = _a.setNextExercise;
    var _b = useState(duration), timeLeft = _b[0], setTimeLeft = _b[1];
    if (timeLeft === 0) {
        setNextExercise();
    }
    console.log(timeLeft);
    useEffect(function () {
        var reduceTime = function () {
            setTimeLeft(function (prevTimeLeft) {
                return prevTimeLeft >= 0.1 ? prevTimeLeft - 0.1 : 0;
            });
        };
        var interval = setInterval(reduceTime, 100);
        return function () {
            clearInterval(interval);
            interval = null;
        };
    }, []);
    return (<div className="flex h-full w-full flex-col items-center justify-center">
      <ProgressCircle progress={(1 - timeLeft / duration) * 100} givenSize={"large"}>
        <h1>{Math.round(timeLeft)} sec</h1>
      </ProgressCircle>
    </div>);
}
