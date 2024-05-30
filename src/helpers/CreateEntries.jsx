import MainScreen from "../components/MainScreen";
import {
  CreateRandomExercisesButton,
  CreateRandomWorkoutsButton,
} from "./createRandomEntries";
import { getExerciseList } from "../queries/exerciseList";

export default function CreateEntries() {
  const exerciseList = getExerciseList();
  return (
    <MainScreen>
      <CreateRandomExercisesButton />
      {exerciseList && (
        <CreateRandomWorkoutsButton exerciseList={exerciseList} />
      )}
    </MainScreen>
  );
}
