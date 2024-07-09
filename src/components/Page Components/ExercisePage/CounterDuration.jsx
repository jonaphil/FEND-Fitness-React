import { useContext, useState, useEffect } from "react";
import { ExerciseTheme } from "@contexts/Context";
import ProgressCircle from "@components/simple Components/ProgressCircle/ProgressCircle";
export default function CounterDuration(_a) {
    var duration = _a.duration, nextStep = _a.nextStep;
    // FIXME Find a proper way to animate this in React
    var exerciseTheme = useContext(ExerciseTheme).exerciseTheme;
    var _b = useState(duration), timeLeft = _b[0], setTimeLeft = _b[1];
    useEffect(function () {
        var reduceTime = function () {
            setTimeLeft(function (prevTimeLeft) {
                return prevTimeLeft >= 0.1 ? prevTimeLeft - 0.1 : 0;
            });
        };
        //set the interval for rendering.
        var interval = setInterval(reduceTime, 100);
        //start another Timeout for seperate Triggering of nextStep. To avoid an error of type Cannot update a component while rendering a different component.
        var waitForNextStep = setTimeout(nextStep, duration * 1000);
        return function () {
            clearInterval(interval);
            interval = null;
            clearTimeout(waitForNextStep);
            waitForNextStep = null;
        };
    }, []);
    return (<div className="flex h-full w-full flex-col items-center justify-center">
      <ProgressCircle progress={(1 - timeLeft / duration) * 100} givenSize={"large"} background={exerciseTheme === "light" ? "light" : "dark"}>
        <h1 className="text-center">{Math.round(timeLeft)}s</h1>
      </ProgressCircle>
    </div>);
}
