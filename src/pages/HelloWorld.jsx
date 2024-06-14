import { useState } from "react";
import MainScreen from "../components/MainScreen";
import ProgressCircle from "../components/ProgressCircle/ProgressCircle.jsx";
import Workout from "../components/Workout/Workout.jsx";

export default function HelloWorld() {
  const [state, setState] = useState(0);
  return (
    <MainScreen>
      {" "}
      <Workout currentExercise={state}>
        <div className="flex flex-col items-center">
          <h1>{`${state}`} </h1>
          <div className="flex flex-row gap-10">
            <h3>
              <button onClick={() => setState(state + 1)}>+</button>
            </h3>
            <h3>
              <button onClick={() => setState(state - 1)}>-</button>
            </h3>
          </div>
        </div>
      </Workout>
    </MainScreen>
  );
}
