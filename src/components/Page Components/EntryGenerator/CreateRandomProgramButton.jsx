import { getRandomProgramMutation } from "@adapters/graphQL/generators";
import { useEntryCreator } from "@contexts/hooks";

export default function CreateRandomProgramButton({
  workoutList,
  assetList,
  addProgramToCache,
}) {
  const { addAndPublish } = useEntryCreator(
    () => getRandomProgramMutation(workoutList, assetList),
    "Program"
  );

  return (
    <button onClick={addAndPublish} className="rounded-md bg-dmedium p-4">
      Add random Program
    </button>
  );
}
