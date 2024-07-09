import { useMutation } from "@apollo/client";
import getRandomProgramMutation from "@utils/helpers/graphQLGenerators/getRandomProgramMutation";

export default function CreateRandomProgramButton({ workoutList, assetList }) {
  const ADD_RANDOM_PROGRAM = getRandomProgramMutation(workoutList, assetList);

  const [addProgram, { data, error }] = useMutation(ADD_RANDOM_PROGRAM);

  if (error) console.log(`Error: ${error.message}`);
  if (data) console.log(data);
  return (
    <button onClick={addProgram} className="rounded-md bg-dmedium p-4">
      Add random Program
    </button>
  );
}
