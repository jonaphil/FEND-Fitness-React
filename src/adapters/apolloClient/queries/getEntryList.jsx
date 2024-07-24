import { createQueryPreloader } from "@apollo/client";
import apolloClient from "@contexts/apollo";
import GET_ENTRIES from "@adapters/graphQL/queries/GET_ENTRIES";

export default function getEntryList() {
  const preloadQuery = createQueryPreloader(apolloClient);
  const promise = preloadQuery(GET_ENTRIES, {
    context: { apiName: "hygraph" },
  }).toPromise();
  return promise;
}
