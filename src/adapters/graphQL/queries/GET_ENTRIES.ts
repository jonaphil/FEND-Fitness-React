import { gql } from "@apollo/client";

const GET_ENTRIES = gql`
  query HygraphGetIds {
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
