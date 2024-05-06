import { gql, useQuery } from "@apollo/client";

export default function getProgramDetails(id) {
  //Apollo- Cache-keys.
  const GET_PROGRAM_DETAILS = gql`
  query GetProgramDetails ($programId: ID!) {
programs(where: {id: $programId}){

}
  
}

`;
}
