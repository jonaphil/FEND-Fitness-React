import { useQuery } from "@apollo/client";
import GET_ENTRIES from "@adapters/graphQL/queries/GET_ENTRIES";

// FIXME function has to be async??
export default function getEntryList() {
  const { loading, error, data } = useQuery(GET_ENTRIES);

  if (error) {
    console.log(error.message);
  }

  return { loading, data, error };
}
