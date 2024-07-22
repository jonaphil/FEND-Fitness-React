import { generateRandomList, randomInt } from "@utils/random/generator";

export default function generateProgramWorkouts(workoutList) {
  const randomIndex = generateRandomList(workoutList.length);
  const focusCounter = {
    cardio: 0,
    coordination: 0,
    mobility: 0,
    weightTraining: 0,
  };
  const workoutListLength = randomInt(
    workoutList.length < 28 ? workoutList.length : 28,
    workoutList.length < 7 ? 0 : 7
  );
  let workoutListString = "[";
  for (let day = 1; day <= workoutListLength; day += 1) {
    const workout = workoutList[randomIndex[day - 1]];
    const singleWorkoutString = `{
      day: ${day},
      workout: {
        connect: {id:"${workout.id}"}
      }
    },`;
    workoutListString += singleWorkoutString;
    focusCounter[workout.category] += 1;
  }
  workoutListString += "]";
  const focus = Object.keys(focusCounter).reduce((x, y) =>
    focusCounter[x] > focusCounter[y] ? x : y
  );
  return [workoutListString, focus];
}
