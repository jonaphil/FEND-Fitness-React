import { getProgramsList } from "../queries/programsList";
import CardList from "../components/CardList";
import MainScreen from "../components/MainScreen";

export default function ExcerciseList() {
  const programs = getProgramsList();
  return (
    <MainScreen page="excerciseList">
      <h2 className="mb-10 self-start">Browse</h2>
      <CardList listArray={programs} />
    </MainScreen>
  );
}
