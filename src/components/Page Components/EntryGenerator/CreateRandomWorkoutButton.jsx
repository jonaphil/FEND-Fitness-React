import { getRandomWorkoutMutation } from "@adapters/graphQL/generators";
import { useEntryCreator } from "@contexts/hooks";

export default function CreateRandomWorkoutButton({
  exerciseList,
  addWorkoutToCache,
}) {
  const { addAndPublish } = useEntryCreator(
    () => getRandomWorkoutMutation(exerciseList),
    "Workout"
  );

  return (
    <button onClick={addAndPublish} className="rounded-md bg-dmedium p-4">
      Add random Workout
    </button>
  );
}
