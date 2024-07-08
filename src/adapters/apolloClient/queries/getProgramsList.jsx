import { apolloClient } from "@contexts/Context";
import GET_PROGRAMS from "@adapters/graphQL/queries/GET_PROGRAMS";

// FIXME function has to be async??
export default function getProgramsList() {
  const response = apolloClient.query({ query: GET_PROGRAMS });

  return response;
}
