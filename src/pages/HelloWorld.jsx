import MainScreen from "../components/MainScreen";
import { useState } from "react";
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

{
  /*
export default function HelloWorld({ percentage }) {
  const donutStyle = {
    background: `radial-gradient(closest-side, transparent 0% 80%, ${dmedium} 95% 100%)`,
  };

  const [state, setState] = useState(percentage);

  const donutStatus = {
    background: `conic-gradient(${dlight} 0 ${state}%, ${dmedium} ${state}% 100%)`,
    transition: "background 2s",
  };

  console.log(donutStatus);

  return (
    <MainScreen>
      <div className="relative self-center justify-self-center">
        <div style={donutStatus} className="absolute h-20 w-20 rounded-full">
          <div></div>
        </div>
        <div className="absolute h-20 w-20 origin-center scale-75 self-center justify-self-center rounded-full bg-ddark"></div>
      </div>
      <button
        onClick={() => {
          setState(state + 5);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setState(state - 5);
        }}
      >
        -
      </button>
    </MainScreen>
  );
}
*/
}
