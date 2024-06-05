import { gql, useQuery } from "@apollo/client";
import { apolloClient } from "../Context";

// FIXME function has to be async??
export default function loadProgramsList() {
  const GET_PROGRAMS = gql`
    query GetPrograms {
      programs {
        id
        name
        duration
      }
    }
  `;

  const response = apolloClient.query({ query: GET_PROGRAMS });

  return response;
}
