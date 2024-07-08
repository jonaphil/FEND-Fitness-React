import { gql } from "@apollo/client";
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
export default GET_PROGRAM_DETAILS;
