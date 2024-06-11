import WorkoutCard from "./WorkoutCard";

export default function ProgramDaysList({ workoutsWithDay }) {
  const workoutsPreview = workoutsWithDay.slice(0, 3);
  return (
    <div className="px-6 pb-28 pt-8">
      <div className="mb-5 flex w-full flex-row items-center justify-between">
        <h3>{workoutsWithDay.length} Tage</h3>
        <p className="text-xs">Alles auswählen</p>
      </div>
      <ul className="flex w-full flex-col gap-4">
        {workoutsPreview.map((workoutOnDay, index) => (
          <li key={index}>
            <WorkoutCard workoutOnDay={workoutOnDay} />
          </li>
        ))}
      </ul>
    </div>
  );
}
