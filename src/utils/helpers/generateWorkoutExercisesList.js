import { randomInt, generateRandomList } from "@utils/random/generator";
import { getRandom } from "@utils/random/array";
import { exerciseTypeList } from "@utils/random/content";

export default function generateWorkoutExercisesList(exerciseList) {
  const amountExercises = randomInt(
    exerciseList.length < 20 ? exerciseList.length : 20,
    exerciseList.length < 10 ? 0 : 10
  );
  const possibleIndices = generateRandomList(exerciseList.length);
  const duration = randomInt(amountExercises * 1.2, amountExercises * 1.7);

  let workoutExercisesString = `[`;

  //TODO: Refactor using reducer function
  for (let i = 0; i < amountExercises; i += 1) {
    const exerciseType = getRandom(exerciseTypeList);
    const exercise = exerciseList[possibleIndices[i]];
    const simpleExerciseString = `
    {${exerciseType[1]}: 
      {${exerciseType[0]}: ${
      exerciseType[0] === "reps" ? randomInt(15, 7) : randomInt(90, 30, 10)
    }, exercise: {
        connect: {
          id: "${exercise.id}"} } } },`;
    workoutExercisesString += simpleExerciseString;
  }
  workoutExercisesString += "]";
  return { workoutExercisesString, duration };
}
