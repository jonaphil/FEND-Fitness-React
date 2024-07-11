import { useMutation } from "@apollo/client";
import ADD_RANDOM_EXERCISE from "@adapters/graphQL/mutation/randomAddition/ADD_RANDOM_EXERCISE";
import { PUBLISH_EXERCISE } from "@adapters/graphQL/mutation/publish";
import { useEffect } from "react";

export default function CreateRandomExerciseButton({ addExerciseToCache }) {
  const [addExerciseToServer, { data, error }] =
    useMutation(ADD_RANDOM_EXERCISE);
  const [publishExercise, publishResponse] = useMutation(PUBLISH_EXERCISE);

  // FIXME: See Workout Button
  useEffect(() => {
    if (data) {
      console.log(data);
      publishExercise({
        variables: {
          ID: data.createExercise.id,
        },
      });
    }
  }, [data]);
  if (publishResponse?.data) {
    console.log(publishResponse.data);
    addExerciseToCache(data.createExercise);
  }

  if (publishResponse?.error) {
    console.log(`Error: ${publishResponse.error.message}`);
  }
  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <button onClick={addExerciseToServer} className="rounded-md bg-dmedium p-4">
      Add random Exercises
    </button>
  );
}
