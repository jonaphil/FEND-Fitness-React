import { createQueryPreloader } from "@apollo/client";
import apolloClient from "@contexts/apollo";
import GET_PROGRAM_DETAILS from "@adapters/graphQL/queries/GET_PROGRAM_DETAILS";

export default function getProgramDetails(programId) {
  const preloadQuery = createQueryPreloader(apolloClient);
  const promise = preloadQuery(GET_PROGRAM_DETAILS, {
    context: { destination: "hygraph" },
    variables: { programId },
  }).toPromise();
  return promise;
}
