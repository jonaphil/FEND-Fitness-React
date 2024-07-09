import getEntryList from "@adapters/apolloClient/queries/getEntryList";
import { LoadingButton } from "@components/simple Components/StatusElements/Loading";
import {
  CreateRandomExerciseButton,
  CreateRandomWorkoutButton,
  CreateRandomProgramButton,
} from "@utils/helpers/createRandomEntries";

export default function CreateEntries() {
  //TODO: Add Suspend!
  //TODO: Add automatic publishing
  const { exerciseList, programsList } = useUpdatedEntries;
  const entriesFetch = getEntryList();

  return (
    <>
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
    </>
  );
}
