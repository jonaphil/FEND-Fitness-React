import { gql } from "@apollo/client/";

const GET_USER_DATA = gql`
  query MyQuery($userId: String!) {
    Usermanagment_users(where: { id: { _eq: $userId } }) {
      id
      name
      currentDay
      currentProgramId
      daysInARow
      lastTimeTrained
    }
  }
`;

export default GET_USER_DATA;
