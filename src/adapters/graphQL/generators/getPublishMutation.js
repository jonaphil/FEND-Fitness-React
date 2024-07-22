import { gql } from "@apollo/client";
import { getRandomString } from "@utils/random/generator";

const getPublishMutation = (modelName) => {
  const PUBLISH_MUTATION = gql`
  mutation HygraphPublish${modelName}${getRandomString(5)}($ID: ID!) {
    publish${modelName}(where: { id: $ID }, to: PUBLISHED) {
      id
    }
  }
`;
  return PUBLISH_MUTATION;
};

export default getPublishMutation;
