import { useMutation } from "@apollo/client";
import getRandomWorkoutMutation from "@utils/helpers/graphQLGenerators";

export default function CreateRandomWorkoutButton({
  exerciseList,
  addWorkoutToCache,
}) {
  const ADD_RANDOM_WORKOUT = getRandomWorkoutMutation(exerciseList);
  const [addWorkoutToServer, { data, error }] = useMutation(ADD_RANDOM_WORKOUT);

  if (!error) {
    console.log("Successfully added:");
    console.log(data);
    addWorkoutToCache(data);
  } else {
    console.log(`Error: ${error.message}`);
  }

  return (
    <button onClick={addWorkoutToServer} className="rounded-md bg-dmedium p-4">
      Add random Workout
    </button>
  );
}
