import { useMutation } from "@apollo/client";
import getRandomWorkoutMutation from "@utils/helpers/graphQLGenerators";

export default function CreateRandomWorkoutButton({ exerciseList }) {
  const ADD_RANDOM_WORKOUT = getRandomWorkoutMutation(exerciseList);
  const [addWorkout, { data, error }] = useMutation(ADD_RANDOM_WORKOUT);

  if (error) console.log(`Error: ${error.message}`);
  if (data) console.log(data);
  return (
    <button onClick={addWorkout} className="rounded-md bg-dmedium p-4">
      Add random Workout
    </button>
  );
}
