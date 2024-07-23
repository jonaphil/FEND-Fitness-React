import { gql } from "@apollo/client";

// FIXME: Why is prettier destroying this?
// prettier-ignore
const VOTE_WORKOUT = gql`
  mutation HasuraVoteWorkout(
    $VoteId: String!, $UserId: String!, $WorkoutId: String!, $Vote: Int!) {
    insert_ProgramData_usersVoteWorkout_one(
      object: { UserId: $UserId, VoteId: $VoteId, WorkoutId: $WorkoutId, Vote: $Vote }
      on_conflict: {
        constraint: usersVoteWorkout_UserId_WorkoutId_key,
        update_columns: [Vote]
      }
    ) {
      VoteId
      UserId
      WorkoutId
      Vote
    }
  }
`;

export default VOTE_WORKOUT;
