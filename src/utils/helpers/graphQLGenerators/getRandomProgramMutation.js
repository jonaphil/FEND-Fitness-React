import { gql } from "@apollo/client";
import generateProgramWorkouts from "@utils/helpers/generateProgramWorkouts";
import { getRandom } from "@utils/random/array";
import { randomInt } from "@utils/random/generator";
import { names, descriptions, difficultyList } from "@utils/random/content";

export default function getRandomProgramMutation(workoutList, assetList) {
  const duration = randomInt(15, 4);
  const [workoutsString, focus] = generateProgramWorkouts(workoutList);
  const ADD_RANDOM_PROGRAM = gql`
  mutation AddProgram {
    createProgram(
      data: {
        name: "Programey ${getRandom(names)}",
        image: { connect:
          {id: "${getRandom(assetList).id}"}
        },
        duration: ${duration},
        difficulty: ${getRandom(difficultyList)},
        description: "${getRandom(descriptions)}",
        workoutsWithDay: { create: ${workoutsString}},
        focus: ${focus}
      }
    ){
      id
      name
      image {
        id
        url
      }
      duration
      difficulty
      description
      workoutsWithDay{
        id
      }
      focus
    }
  }`;
  return ADD_RANDOM_PROGRAM;
}
