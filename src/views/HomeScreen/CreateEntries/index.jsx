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
  //TODO: Automatic addition of generated material to Cache, without refetching!

  const { exerciseList, programsList, workoutList, assetList } =
    useUpdatedEntries;
  const entriesFetch = getEntryList();

  const { exercises, workouts, assets } = entriesFetch.data;
  const addExerciseToCache = (newExercise) => {
    exercises.push(newExercise);
  };
  const addWorkoutToCache = (newWorkout) => {
    workouts.push(newWorkout);
  };
  return (
    <>
      <CreateRandomExerciseButton addExerciseToCache={addExerciseToCache} />
      {entriesFetch.loading ? (
        <LoadingButton />
      ) : entriesFetch.error ? (
        <div className="bg-red700 rounded-md pt-4">ERROR</div>
      ) : (
        <>
          <CreateRandomWorkoutButton
            addWorkoutToCache={addWorkoutToCache}
            exerciseList={exercises}
          />
          <CreateRandomProgramButton
            workoutList={workouts}
            assetList={assets}
          />
        </>
      )}
    </>
  );
}
