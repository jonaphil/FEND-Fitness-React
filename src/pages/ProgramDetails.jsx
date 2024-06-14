import { createContext, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import getProgramDetails from "../queries/getProgramDetails";
import Error from "../components/StatusElements/Error";
import { LoadingPage } from "../components/StatusElements/Loading";
import ProgramHero from "../components/ProgramHero";
import ProgramInfoText from "../components/ProgramInfo";
import ProgramStats from "../components/ProgramStats";
import ProgramDaysList from "../components/ProgramDaysList";
import Button from "../components/Button";

export const ProgramContext = createContext({});

export function getProgramStats(workoutsWithDayArr) {
  const programStats = {
    cardio: 0,
    coordination: 0,
    mobility: 0,
    weightTraining: 0,
  };

  workoutsWithDayArr.forEach((workoutWithDay) => {
    programStats[workoutWithDay.workout.category] += 1;
  });

  return programStats;
}

function ProgramDetails() {
  const {
    name,
    focus,
    difficulty,
    duration,
    description,
    workoutsWithDay,
    stats,
  } = useContext(ProgramContext);
  return (
    <>
      <ProgramHero
        name={name}
        focus={focus}
        difficulty={difficulty}
        duration={duration}
      />
      <ProgramInfoText text={description} />
      <ProgramStats stats={stats} />
      <ProgramDaysList workoutsWithDay={workoutsWithDay} />
      <div className="fixed bottom-8 flex w-full items-center justify-center">
        <Link to={"/profile"}>
          <Button>Jetzt starten</Button>
        </Link>
      </div>
    </>
  );
}

export function ProgramDetailsPage() {
  const { programId } = useParams();

  const programQuery = getProgramDetails(programId);

  if (programQuery.loading) {
    return <LoadingPage />;
  }
  if (programQuery.error) {
    console.log(
      `An Error occured fetching the program data: ${programQuery.error.message}`
    );
    return <Error />;
  }

  const programObj = {
    ...programQuery?.data?.programs[0],
    stats: getProgramStats(programQuery?.data?.programs[0].workoutsWithDay),
  };
  console.log(programObj);
  return (
    <main className="bg-ddark">
      <ProgramContext.Provider value={programObj}>
        <ProgramDetails />
      </ProgramContext.Provider>
    </main>
  );
}
