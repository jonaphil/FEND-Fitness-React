import { gql } from "@apollo/client";

const PUBLISH_PROGRAM = gql`
  mutation publishProgram($ID: ID!) {
    publishProgram(where: { id: $ID }, to: PUBLISHED) {
      id
    }
  }
`;

export default PUBLISH_PROGRAM;
