import { gql, useQuery } from "@apollo/client";

export default function getProgramDetails(programId) {
  //Apollo- Cache-keys.
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
          id
          day
          workout {
            name
            category
            duration
          }
        }
      }
    }
  `;

  const result = useQuery(GET_PROGRAM_DETAILS, {
    variables: { programId },
  });

  return result;
}
