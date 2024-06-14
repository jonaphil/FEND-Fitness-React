import ChartLegend from "./ChartLegend";
import ProgramDetailsPieChart from "./ProgramStatsChart";

export default function ProgramDetailsStats({ stats }) {
  return (
    <div className="flex flex-col items-stretch justify-between gap-9 bg-ddark pb-8 pl-6 pr-8 pt-7">
      <h3>So ist das Programm aufgeteilt</h3>
      <div className="flex flex-row gap-8">
        <ProgramDetailsPieChart stats={stats} />
        <ChartLegend />
      </div>
    </div>
  );
}
