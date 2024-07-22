import { gql } from "@apollo/client";

const GET_PROGRAMS = gql`
  query HygraphGetPrograms {
    programs {
      id
      name
      duration
    }
  }
`;

export default GET_PROGRAMS;
