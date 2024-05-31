import { gql, useQuery } from "@apollo/client";

// FIXME function has to be async??
export default function getEntryList() {
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

  const { loading, error, data } = useQuery(GET_ENTRIES);

  if (error) {
    console.log(error.message);
  }

  return { loading, data, error };
}
