import { apolloClient } from "@contexts/Context";
import GET_WORKOUT_DETAILS from "@adapters/graphQL/queries/GET_WORKOUT_DETAILS";

export default function getWorkoutDetails(workoutId) {
  const result = apolloClient.query({
    query: GET_WORKOUT_DETAILS,
    variables: { workoutId },
  });
  return result;
}
