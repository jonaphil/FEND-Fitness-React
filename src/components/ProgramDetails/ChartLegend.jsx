export default function ChartLegend() {
  return (
    <ul className="flex flex-col justify-evenly gap-4.5 pr-10">
      <LegendElement color={"weightTraining"}>Krafttraining</LegendElement>
      <LegendElement color={"coordination"}>Koordination</LegendElement>
      <LegendElement color={"cardio"}>Ausdauer</LegendElement>
      <LegendElement color={"mobility"}>Beweglichkeit</LegendElement>
    </ul>
  );
}

function LegendElement({ children, color }) {
  return (
    <li className="flex flex-row items-center gap-3">
      <div className={`h-3.5 w-3.5 rounded-full bg-${color}`}></div>
      <p className="text-xs">{children}</p>
    </li>
  );
}
