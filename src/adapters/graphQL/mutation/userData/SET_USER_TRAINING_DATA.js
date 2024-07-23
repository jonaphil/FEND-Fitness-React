import { gql } from "@apollo/client";

// prettier-ignore
const SET_USER_TRAINING_DATA = gql`
  mutation HasuraSetUserData(
    $currentDay: Int,
    $currentProgramId: String,
    $daysInARow: Int,
    $lastTimeTrained: String,
    $userId: String!,
  ) {
    update_Usermanagment_users_by_pk(
      pk_columns: { id: $userId }
      _set: {
        currentDay: $currentDay,
        currentProgramId: $currentProgramId,
        daysInARow: $daysInARow,
        lastTimeTrained: $lastTimeTrained,
      }
    ){
      id
      name
      currentDay
      currentProgramId  
    }
  }
`;

export default SET_USER_TRAINING_DATA;
