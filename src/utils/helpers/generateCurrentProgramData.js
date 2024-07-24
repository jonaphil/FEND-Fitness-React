export default function generateCurrentProgramData(day, program) {
    var programId = program.id, programName = program.name, duration = program.duration, workoutsWithDay = program.workoutsWithDay;
    var length = duration * 7;
    var currentWorkout = workoutsWithDay[(day - 1) % workoutsWithDay.length].workout;
    var programDataObject = {
        day: day,
        programId: program.id,
        programName: program.name,
        length: length,
        progress: Math.round(((day - 1) * 100) / length),
        workout: {
            id: currentWorkout.id,
            duration: currentWorkout.duration,
            focus: currentWorkout.category,
        },
    };
    return programDataObject;
}
