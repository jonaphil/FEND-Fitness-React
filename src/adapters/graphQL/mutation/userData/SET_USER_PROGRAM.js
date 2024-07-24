import { gql } from "@apollo/client";

// prettier-ignore
const SET_USER_PROGRAM = gql`
  mutation HasuraSetUserData(
    $currentDay: Int = 1,
    $currentProgramId: String,
    $userId: String!,
  ) {
    update_Usermanagment_users_by_pk(
      pk_columns: { id: $userId }
      _set: {
        currentDay: $currentDay,
        currentProgramId: $currentProgramId,
      }
    ){
      id
      name
      currentDay
      currentProgramId  
    }
  }
`;

export default SET_USER_PROGRAM;
