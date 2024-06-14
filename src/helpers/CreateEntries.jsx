import MainScreen from "../components/MainScreen";
import {
  CreateRandomExerciseButton,
  CreateRandomWorkoutButton,
  CreateRandomProgramButton,
} from "./createRandomEntries";
import getEntryList from "../queries/entriesList";
import { LoadingButton } from "../components/StatusElements/Loading";

export default function CreateEntries() {
  const entriesFetch = getEntryList();

  return (
    <MainScreen>
      <CreateRandomExerciseButton />
      {entriesFetch.loading ? (
        <LoadingButton />
      ) : entriesFetch.error ? (
        <div className="bg-red700 rounded-md pt-4">ERROR</div>
      ) : (
        <>
          <CreateRandomWorkoutButton
            exerciseList={entriesFetch.data.exercises}
          />
          <CreateRandomProgramButton
            workoutList={entriesFetch.data.workouts}
            assetList={entriesFetch.data.assets}
          />
        </>
      )}
    </MainScreen>
  );
}
