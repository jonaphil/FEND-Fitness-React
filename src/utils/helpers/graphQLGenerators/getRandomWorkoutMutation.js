import { gql } from "@apollo/client";
import { names, focusCategories } from "@utils/random/content";
import { getRandom } from "@utils/random/array";
import generateWorkoutExercisesList from "@utils/helpers/generateWorkoutExercisesList";

export default function getRandomWorkoutMutation(exerciseList) {
  const { workoutExercisesString, duration } =
    generateWorkoutExercisesList(exerciseList);

  const ADD_RANDOM_WORKOUT = gql`
    mutation AddWorkout {
      createWorkout(
        data: {
          name: "Workoutey ${getRandom(names)}", 
          category: ${getRandom(focusCategories)}, 
          duration: ${duration}, 
          exercises: { create:
            ${workoutExercisesString}
          }
        }
    ) {
        id
        name
        category
        exercises {
          ... on ExerciseWithReps {
            exercise {
              name
            }
            reps
          }
          ... on ExerciseWithDuration {
            exercise {
              name
            }
            duration
          }
        }
      }
    }
    `;
  return ADD_RANDOM_WORKOUT;
}
