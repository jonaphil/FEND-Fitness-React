import { gql, useQuery } from "@apollo/client";
import { apolloClient } from "../Context";

export default function loadProgramDetails({ params }) {
  //Apollo- Cache-keys.
  const { programId } = params;
  const GET_PROGRAM_DETAILS = gql`
    query GetProgramDetails($programId: ID!) {
      programs(where: { id: $programId }) {
        image {
          url
        }
        id
        name
        description
        focus
        difficulty
        duration
        workoutsWithDay {
          day
          workout {
            id
            name
            category
            duration
          }
        }
      }
    }
  `;

  const result = apolloClient.query({
    query: GET_PROGRAM_DETAILS,
    variables: { programId },
  });

  return result;
}
