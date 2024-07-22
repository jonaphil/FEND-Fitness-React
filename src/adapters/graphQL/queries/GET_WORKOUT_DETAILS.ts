import { gql } from "@apollo/client";

const GET_WORKOUT_DETAILS = gql`
  query HygraphGetWorkoutDetails($workoutId: ID!) {
    workouts(where: { id: $workoutId }) {
      id
      name
      category
      duration
      exercises {
        ... on ExerciseWithReps {
          exercise {
            id
            name
            description
          }
          reps
        }
        ... on ExerciseWithDuration {
          exercise {
            id
            name
            description
          }
          duration
        }
      }
    }
  }
`;

export default GET_WORKOUT_DETAILS;
