import { createQueryPreloader } from "@apollo/client";
import apolloClient from "@contexts/apollo";
import GET_PROGRAMS from "@adapters/graphQL/queries/GET_PROGRAMS";

export default async function getProgramsList() {
  const preloadQuery = createQueryPreloader(apolloClient);
  const promise = preloadQuery(GET_PROGRAMS, {
    context: { destination: "hygraph" },
  }).toPromise();
  return promise;
}
