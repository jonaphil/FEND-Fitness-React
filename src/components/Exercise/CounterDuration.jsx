import { useContext, useState, useEffect } from "react";
import { ExerciseTheme } from "../../Context";
import ProgressCircle from "../ProgressCircle/ProgressCircle";
export default function CounterDuration(_a) {
    var duration = _a.duration, nextStep = _a.nextStep;
    // FIXME Find a proper way to animate this in React
    var exerciseTheme = useContext(ExerciseTheme).exerciseTheme;
    var _b = useState(duration), timeLeft = _b[0], setTimeLeft = _b[1];
    if (timeLeft === 0) {
        nextStep();
    }
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
      <ProgressCircle progress={(1 - timeLeft / duration) * 100} givenSize={"large"} background={exerciseTheme === "light" ? "light" : "dark"}>
        <h1>{Math.round(timeLeft)} sec</h1>
      </ProgressCircle>
    </div>);
}
