import { useState } from "react";
import HomeScreen from "@views/HomeScreen";
import Workout from "@views/Program/Workout";

export default function HelloWorld() {
  const [state, setState] = useState(0);
  return (
    <HomeScreen>
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
    </HomeScreen>
  );
}
