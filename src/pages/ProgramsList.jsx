import { useLoaderData } from "react-router-dom";
import CardList from "../components/CardList";
import MainScreen from "../components/MainScreen";
import { LoadingButton } from "../components/StatusElements/Loading";
import { ErrorButton } from "../components/StatusElements/Error";

export default function ProgramsList() {
  const { data, loading, error } = useLoaderData();
  return (
    <MainScreen page="excerciseList">
      <h2 className="mb-10 self-start">Browse</h2>
      {loading && <LoadingButton />}
      {data && <CardList listArray={data.programs} />}
      {error && <ErrorButton />}
    </MainScreen>
  );
}
