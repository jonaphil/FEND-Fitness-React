export default function getProgramStats(workoutsWithDayArr) {
  const programStats = {
    cardio: 0,
    coordination: 0,
    mobility: 0,
    weightTraining: 0,
  };

  workoutsWithDayArr.forEach((workoutWithDay) => {
    programStats[workoutWithDay.workout.category] += 1;
  });

  return programStats;
}
