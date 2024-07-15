import { getRandomExerciseMutation } from "@adapters/graphQL/generators";
import { useEntryCreator } from "@contexts/hooks";

export default function CreateRandomExerciseButton({ addExerciseToCache }) {
  const { addAndPublish } = useEntryCreator(
    getRandomExerciseMutation,
    "Exercise"
  );

  return (
    <button onClick={addAndPublish} className="rounded-md bg-dmedium p-4">
      Add random Exercises
    </button>
  );
}
