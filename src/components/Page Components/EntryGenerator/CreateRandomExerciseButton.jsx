import { useMutation } from "@apollo/client";
import ADD_RANDOM_EXERCISE from "@adapters/graphQL/mutation/randomAddition/ADD_RANDOM_EXERCISE";

export default function CreateRandomExerciseButton({ addExerciseToCache }) {
  const [addExerciseToServer, { data, error }] =
    useMutation(ADD_RANDOM_EXERCISE);
  if (!error) {
    console.log("Successfully added:");
    console.log(data);
    addExerciseToCache(data);
  } else {
    console.log(`Error: ${error.message}`);
  }

  return (
    <button onClick={addExerciseToServer} className="rounded-md bg-dmedium p-4">
      Add random Exercises
    </button>
  );
}
