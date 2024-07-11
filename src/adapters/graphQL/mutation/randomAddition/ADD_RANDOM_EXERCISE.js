import { gql } from "@apollo/client";
import { getRandom } from "@utils/random/array";
import { names, descriptions, types } from "@utils/random/content";

const ADD_RANDOM_EXERCISE = gql`
    mutation AddExercise{
      createExercise(data:{name: "Exercisey ${getRandom(
        names
      )}", description: "${getRandom(descriptions)}", type: ${getRandom(
  types
)}}){
        id
        name
        description
        type
      }
    }

  `;

export default ADD_RANDOM_EXERCISE;
