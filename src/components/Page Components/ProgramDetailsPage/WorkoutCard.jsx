import germanTranslation from "@utils/lang/translations";

export default function WorkoutCard({ workoutOnDay }) {
  const { duration, category } = workoutOnDay.workout;
  const { day } = workoutOnDay;

  let bgColor;
  if (day % 3 === 0) {
    bgColor = "gradient-red";
  } else if (day % 3 === 1) {
    bgColor = "gradient-blue";
  } else if (day % 3 === 2) {
    bgColor = "gradient-green";
  }

  return (
    <div className="flex h-25 w-full flex-row items-stretch ">
      <div
        className={`bg-${bgColor} h-full w-25 shrink-0 rounded-l-2.5xl`}
      ></div>
      <div className="box-border flex w-full flex-col justify-between rounded-r-2.5xl bg-dmedium py-2.5 pl-3.5 pr-4.5">
        <h3>Tag {day}</h3>
        <div className="flex flex-col">
          <p className="text-xs">{duration} Min.</p>
          <p className="text-xs">{germanTranslation[category]}</p>
        </div>
      </div>
    </div>
  );
}
