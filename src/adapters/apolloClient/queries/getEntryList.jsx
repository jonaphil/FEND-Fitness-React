import { apolloClient } from "@contexts/Context";
import GET_ENTRIES from "@adapters/graphQL/queries/GET_ENTRIES";

// FIXME function has to be async??
export default function getEntryList() {
  const result = apolloClient.query({ query: GET_ENTRIES });

  return result;
}
