import { gql, useQuery } from "@apollo/client";
import Card from "../components/Card";

//FIXME function has to be async??
export function getProgramsList() {
  
  const GET_PROGRAMS = gql`
    query GetPrograms {
      programs {
        id
        name
        duration
      }
    }
  `;

  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return [];
  if (error) {
    console.log(error.message);
    return [{ name: "Error" }];
  }

  return data.programs;
}
