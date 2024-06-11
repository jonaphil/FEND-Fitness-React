import { useEffect, useState } from "react";
import { useParams, useRouteLoaderData, useOutletContext, } from "../../node_modules/react-router-dom/dist/index";
import ProgressCircle from "./ProgressCircle/ProgressCircle";
export default function Exercise() {
    var exerciseIndex = parseInt(useParams().exerciseIndex, 10); // did without deconstruction to be able to parse int.
    var setCurrentExercise = useOutletContext();
    setCurrentExercise(exerciseIndex); // FIXME work around warning on first rendering!
    console.log(exerciseIndex);
    var exercise = useRouteLoaderData("workout").data.workouts[0].exercises[exerciseIndex];
    var _a = exercise.exercise, name = _a.name, description = _a.description, id = _a.id;
    if (exercise.reps) {
        console.log(exercise);
        return <ExerciseWithReps reps={exercise.reps}/>;
    }
    else if (exercise.duration) {
        console.log(exercise);
        return <ExerciseWithDuration duration={exercise.duration} id={id}/>;
    }
}
function ExerciseWithReps(_a) {
    var reps = _a.reps;
    return <p className="font-special text-6.5xl font-bold">{reps} x</p>;
}
function ExerciseWithDuration(_a) {
    // FIXME Find a proper way to animate this in React
    var duration = _a.duration, id = _a.id;
    var _b = useState(duration), timeLeft = _b[0], setTimeLeft = _b[1];
    useEffect(function () {
        console.log("start");
        setTimeLeft(duration);
        var reduceTime = function () {
            setTimeLeft(function (prevTimeLeft) {
                return prevTimeLeft > 0 ? prevTimeLeft - 0.1 : 0;
            });
        };
        // setTimeLeft(duration);
        // let timeout: number = null;
        // for (let i = 0; i < duration; i += 0.1) {
        //   timeout = setTimeout(reduceTime, 100);
        //   clearTimeout(timeout);
        // }
        var interval = setInterval(reduceTime, 100);
        return function () {
            clearInterval(interval);
            console.log("stop");
        };
    }, [id]);
    return (<div className="flex h-full w-full flex-col items-center justify-center">
      <ProgressCircle progress={(1 - timeLeft / duration) * 100} givenSize={"large"}>
        <h1>{Math.round(timeLeft)} sec</h1>
      </ProgressCircle>
    </div>);
}
