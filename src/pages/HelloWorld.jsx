import MainScreen from "../components/MainScreen";
import { useState } from "react";
import Card from "../components/Card";
import { ddark, dmedium, dlight } from "../styles/variables";
import ProgressCircle from "../components/ProgressCircle";
import "chart.js/auto";
import { Doughnut } from "react-chartjs-2";

export default function HelloWorld() {
  const [percentage, setPercentage] = useState(40);
  return (
    <MainScreen>
      <ProgressCircle
        percentage={percentage}
        size={20}
        filledColor={"gradient-red"}
        bgColor={"ddark"}
      />
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
      <Doughnut
        data={{
          labels: ["Red", "Blue", "Yellow"],
          datasets: [
            {
              label: "My First Dataset",
              data: [100 / (percentage * 0.1), percentage, 100 - percentage],
              backgroundColor: [
                "rgb(255, 99, 132)",
                "rgb(54, 162, 235)",
                "rgb(255, 205, 86)",
              ],
              hoverOffset: 4,
            },
          ],
        }}
      />
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
