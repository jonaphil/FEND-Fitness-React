import { colors } from "../styles/variables.jsx";
import ProgramDetailsPieChart from "./ProgramStatsChart.jsx";

export default function ProgramDetailsStats({ stats }) {
  return (
    <div className="flex flex-col items-stretch justify-between gap-9 bg-ddark pb-8 pl-6 pr-8 pt-7">
      <h3>So ist das Programm aufgeteilt</h3>
      <div className="flex flex-row gap-6">
        <ProgramDetailsPieChart stats={stats} />
        <ul className="flex flex-col justify-evenly"></ul>
      </div>
    </div>
  );
}
