import { useEffect } from "react";
import { useMutation } from "@apollo/client";
import getRandomProgramMutation from "@utils/helpers/graphQLGenerators/getRandomProgramMutation";
import { PUBLISH_PROGRAM } from "@adapters/graphQL/mutation/publish";

export default function CreateRandomProgramButton({
  workoutList,
  assetList,
  addProgramToCache,
}) {
  const ADD_RANDOM_PROGRAM = getRandomProgramMutation(workoutList, assetList);

  const [addProgram, { data, error }] = useMutation(ADD_RANDOM_PROGRAM);
  const [publishProgram, publishResponse] = useMutation(PUBLISH_PROGRAM);

  //FIXME see Workout Button
  useEffect(() => {
    if (data) {
      console.log(data);
      publishProgram({
        variables: {
          ID: data.createProgram.id,
        },
      });
    }
  }, [data]);
  if (publishResponse?.data) {
    console.log(publishResponse.data);
    addProgramToCache(data.createProgram);
  }

  if (publishResponse?.error) {
    console.log(`Error: ${publishResponse.error.message}`);
  }
  if (error) {
    console.log(`Error: ${error.message}`);
  }
  return (
    <button onClick={addProgram} className="rounded-md bg-dmedium p-4">
      Add random Program
    </button>
  );
}
