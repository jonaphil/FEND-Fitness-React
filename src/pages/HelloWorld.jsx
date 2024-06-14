import { useState } from "react";
import MainScreen from "../components/MainScreen";
import ProgressCircle from "../components/ProgressCircle/ProgressCircle.jsx";

export default function HelloWorld() {
  const [percentage, setPercentage] = useState(40);
  return (
    <MainScreen>
      {" "}
      <ProgressCircle
        progress={percentage}
        background={"dark"}
        givenSize={"large"}
      >
        <h1 className="scale-150">{percentage} %</h1>
      </ProgressCircle>
      <div>
        <button
          onClick={() => {
            setPercentage(percentage + 5);
            console.log(percentage);
          }}
        >
          <h2>+</h2>
        </button>
        <button
          onClick={() => {
            setPercentage(percentage - 5);
            console.log(percentage);
          }}
        >
          <h2>-</h2>
        </button>
      </div>
    </MainScreen>
  );
}
