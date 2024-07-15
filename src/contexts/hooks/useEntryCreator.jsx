import { useMutation } from "@apollo/client";
import { getPublishMutation } from "@adapters/graphQL/generators";

export default function useEntryCreator(getMutationString, modelName) {
  const PUBLISH_MUTATION = getPublishMutation(modelName);
  const CREATE_MUTATION = getMutationString();
  const [publishEntry, responsePublishEntry] = useMutation(PUBLISH_MUTATION, {
    onCompleted: (data) => {
      console.log(`Successfully Added a new ${modelName}!`);
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const [addEntry, responseAddEntry] = useMutation(CREATE_MUTATION, {
    onCompleted: (data) => {
      publishEntry({
        variables: {
          ID: data[`create${modelName}`].id,
        },
      });
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const addAndPublish = addEntry;

  return { addAndPublish };
}
