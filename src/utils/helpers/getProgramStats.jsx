export default function getProgramStats(workoutsWithDayArr) {
    var programStats = {
        cardio: 0,
        coordination: 0,
        mobility: 0,
        weightTraining: 0,
    };
    workoutsWithDayArr.forEach(function (workoutWithDay) {
        programStats[workoutWithDay.workout.category] += 1;
    });
    return programStats;
}
