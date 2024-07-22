import { createQueryPreloader } from "@apollo/client";
import apolloClient from "@contexts/apollo";
import GET_WORKOUT_DETAILS from "@adapters/graphQL/queries/GET_WORKOUT_DETAILS";

export default function getWorkoutDetails(workoutId) {
  const preloadQuery = createQueryPreloader(apolloClient);
  const queryRef = preloadQuery(GET_WORKOUT_DETAILS, {
    context: { destination: "hygraph" },
    variables: { workoutId },
  });
  return queryRef;
}
