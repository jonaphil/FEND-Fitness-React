import { colors } from "../styles/variables.jsx";
import { Chart as ChartJS, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement);

export default function ProgramStatsChart({ stats }) {
  const data = {
    datasets: [
      {
        data: [
          stats.cardio,
          stats.coordination,
          stats.mobility,
          stats.weightTraining,
        ],
        backgroundColor: [
          colors.cardio,
          colors.coordination,
          colors.mobility,
          colors.weightTraining,
        ],
        borderColor: [colors.ddark],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={data} />;
}
