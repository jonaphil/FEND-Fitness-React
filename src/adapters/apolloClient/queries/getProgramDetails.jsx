import { apolloClient } from "@contexts/Context";
import GET_PROGRAM_DETAILS from "@adapters/graphQL/queries/GET_PROGRAM_DETAILS";

export default function getProgramDetails(programId) {
  const result = apolloClient.query({
    query: GET_PROGRAM_DETAILS,
    variables: { programId },
  });

  return result;
}
