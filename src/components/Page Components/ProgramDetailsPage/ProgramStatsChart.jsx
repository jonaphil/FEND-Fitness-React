import { Chart as ChartJS, ArcElement } from "chart.js";
import { Pie } from "react-chartjs-2";
import colors from "@utils/styles/colors";

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

  return (
    <div className="h-fit-content w-2/5">
      <Pie data={data} />
    </div>
  );
}
