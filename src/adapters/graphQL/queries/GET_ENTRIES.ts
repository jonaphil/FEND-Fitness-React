import { gql } from "@apollo/client";

const GET_ENTRIES = gql`
  query GetIds {
    exercises {
      id
    }
    workouts {
      id
      category
    }
    programs {
      id
    }
    assets {
      id
    }
  }
`;

export default GET_ENTRIES;
