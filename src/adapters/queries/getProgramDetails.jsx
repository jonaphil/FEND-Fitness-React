import { gql } from "@apollo/client";
import { apolloClient } from "@contexts/Context";

export default function getProgramDetails({ programId }) {
  // TODO Apollo-Cache-keys.
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
