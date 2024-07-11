import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import getRandomWorkoutMutation from "@utils/helpers/graphQLGenerators/getRandomWorkoutMutation";
import { PUBLISH_WORKOUT } from "@adapters/graphQL/mutation/publish";

export default function CreateRandomWorkoutButton({
  exerciseList,
  addWorkoutToCache,
}) {
  const ADD_RANDOM_WORKOUT = getRandomWorkoutMutation(exerciseList);
  const [addWorkoutToServer, { data, error }] = useMutation(ADD_RANDOM_WORKOUT);
  const [publishWorkout, publishResponse] = useMutation(PUBLISH_WORKOUT);

  // FIXME: Error with second click on same button
  useEffect(() => {
    if (data) {
      console.log(data);
      publishWorkout({
        variables: {
          ID: data.createWorkout.id,
        },
      });
    }
  }, [data]);
  if (publishResponse?.data) {
    console.log(publishResponse.data);
    addWorkoutToCache(data.createWorkout);
  }

  if (publishResponse?.error) {
    console.log(`Error: ${publishResponse.error.message}`);
  }
  if (error) {
    console.log(`Error: ${error.message}`);
  }

  return (
    <button onClick={addWorkoutToServer} className="rounded-md bg-dmedium p-4">
      Add random Workout
    </button>
  );
}
