import { gql } from "@apollo/client";

const PUBLISH_EXERCISE = gql`
  mutation publishExercise($ID: ID!) {
    publishExercise(where: { id: $ID }, to: PUBLISHED) {
      id
    }
  }
`;

export default PUBLISH_EXERCISE;
