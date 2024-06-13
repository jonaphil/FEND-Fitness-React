import { useContext, useState, useEffect } from "react";
import { ExerciseTheme } from "../../Context";
import ProgressCircle from "../ProgressCircle/ProgressCircle";

export default function CounterDuration({
  duration,
  nextStep,
}: {
  duration: number;
  nextStep: () => void;
}): React.JSX.Element {
  // FIXME Find a proper way to animate this in React
  const { exerciseTheme } = useContext(ExerciseTheme);

  const [timeLeft, setTimeLeft]: [number, (n) => void] = useState(duration);
  if (timeLeft === 0) {
    nextStep();
  }

  useEffect(() => {
    const reduceTime: () => void = () => {
      setTimeLeft((prevTimeLeft: number) => {
        return prevTimeLeft >= 0.1 ? prevTimeLeft - 0.1 : 0;
      });
    };
    let interval = setInterval(reduceTime, 100);
    return () => {
      clearInterval(interval);
      interval = null;
    };
  }, []);

  return (
    <div className="flex h-full w-full flex-col items-center justify-center">
      <ProgressCircle
        progress={(1 - timeLeft / duration) * 100}
        givenSize={"large"}
        background={exerciseTheme === "light" ? "light" : "dark"}
      >
        <h1>{Math.round(timeLeft)} sec</h1>
      </ProgressCircle>
    </div>
  );
}
