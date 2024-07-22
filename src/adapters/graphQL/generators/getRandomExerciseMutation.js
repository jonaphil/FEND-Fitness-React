import { gql } from "@apollo/client";
import { getRandom } from "@utils/random/array";
import { names, descriptions, types } from "@utils/random/content";
import { getRandomString } from "@utils/random/generator";

export default function getRandomExerciseMutation() {
  const ADD_RANDOM_EXERCISE = gql`
  mutation HygraphAdd${getRandomString(5)}{
    createExercise(data:{name: "Exercisey ${getRandom(
      names
    )}", description: "${getRandom(descriptions)}", type: ${getRandom(types)}}){
      id
      name
      description
      type
    }
  }
`;
  return ADD_RANDOM_EXERCISE;
}
