import { useMutation } from "@apollo/client";
import ADD_RANDOM_EXERCISE from "@adapters/graphQL/mutation/randomAddition/ADD_RANDOM_EXERCISE";

export default function CreateRandomExerciseButton() {
  //FIXME Add Suspend!
  const [addExercise, { data, error }] = useMutation(ADD_RANDOM_EXERCISE);
  console.log(data);
  console.log(error);
  return (
    <button onClick={addExercise} className="rounded-md bg-dmedium p-4">
      Add random Exercises
    </button>
  );
}
