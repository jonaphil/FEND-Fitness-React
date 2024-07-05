import { useLoaderData } from "react-router-dom";
import CardList from "@components/Page Components/ProgramsListPage/CardList";
import LoadingElement from "@components/simple Components/LoadingElement";
import ErrorElement from "@components/simple Components/ErrorElement";

export default function ProgramsList() {
  const { data, loading, error } = useLoaderData();
  return (
    <>
      <h2 className="mb-10 self-start">Browse</h2>
      {loading && <LoadingElement />}
      {data && <CardList listArray={data.programs} />}
      {error && <ErrorElement />}
    </>
  );
}
