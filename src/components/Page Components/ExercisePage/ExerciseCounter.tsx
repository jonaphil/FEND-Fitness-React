import CounterReps from "./CounterReps";
import CounterDuration from "./CounterDuration";

export default function ExerciseCounter({
  type,
  count,
  id,
  nextStep,
}: {
  type: "reps" | "duration";
  count: number;
  id: String;
  nextStep: () => void;
}): React.JSX.Element {
  console.log(type);
  if (type === "reps") {
    return <CounterReps reps={count} key={`${id}`} />;
  } else if (type === "duration") {
    return (
      <CounterDuration duration={count} key={`${id}`} nextStep={nextStep} />
    );
  }
}
