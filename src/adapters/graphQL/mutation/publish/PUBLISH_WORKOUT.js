import { gql } from "@apollo/client";

const PUBLISH_WORKOUT = gql`
  mutation publishWorkout($ID: ID!) {
    publishWorkout(where: { id: $ID }, to: PUBLISHED) {
      id
    }
  }
`;

export default PUBLISH_WORKOUT;
