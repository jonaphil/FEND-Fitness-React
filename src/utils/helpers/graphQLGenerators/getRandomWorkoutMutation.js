import { gql } from "@apollo/client";
import { names, focusCategories } from "@utils/random/content";
import { getRandom } from "@utils/random/arrayMutation";
import generateWorkoutExercisesList from "@utils/helpers/generateWorkoutExercisesList";

export default function getRandomWorkoutMutation(exerciseList) {
  const { workoutExerciseString, duration } =
    generateWorkoutExercisesList(exerciseList);

  const ADD_RANDOM_WORKOUT = gql`
    mutation AddWorkout {
      createWorkout(
        data: {
          name: "Workout ${getRandom(names)}", 
          category: ${getRandom(focusCategories)}, 
          duration: ${duration}, 
          exercises: { create:
            ${workoutExerciseString}
          }
        }
    ) {
        id
        name
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
