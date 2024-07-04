export default function CounterReps({
  reps,
}: {
  reps: number;
}): React.JSX.Element {
  return <p className="font-special text-6.5xl font-bold">{reps} x</p>;
}
