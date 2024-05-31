import { useParams, Link } from "react-router-dom";
import getProgramDetails from "../queries/getProgramDetails";
import Error from "../components/StatusElements/Error";
import { LoadingPage } from "../components/StatusElements/Loading";
import ProgramHero from "../components/ProgramHero";
import ProgramInfoText from "../components/ProgramInfo";
import ProgramStats from "../components/ProgramStats";
import ProgramDaysList from "../components/ProgramDaysList";

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

function ProgramDetails({ programSpecs = { test: "test" } }) {
  console.log(programSpecs);

  return (
    <>
      <ProgramHero
        name={programSpecs.name}
        focus={programSpecs.focus}
        difficulty={programSpecs.difficulty}
        duration={programSpecs.duration}
      />
      <ProgramInfoText text={programSpecs.description} />{" "}
      <ProgramStats stats={getProgramStats(programSpecs.workoutsWithDay)} />
      <ProgramDaysList days={programSpecs.workoutsWithDay} />
      {/*
      <div className="flex h-[75vh] w-full flex-col items-center justify-between bg-gradient-red px-5 pb-4 pt-6">
        <p className="self-end">x</p>
        <h1>{programSpecs.name}</h1>
        <div className="flex w-full flex-row justify-between px-8">
          {shortInfo.map((item, index) => {
            return (
              <div className="flex flex-col gap-2">
                <div
                  key={index}
                  className="h-4 w-4 rounded-full bg-ddark"
                ></div>
                <p className="text-2xs">{item}</p>
              </div>
            );
          })}
        </div>
      </div>
      <p className="w-full bg-dmedium pb-4 pl-6 pr-8 pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        molestias quo reiciendis in iusto optio sint voluptatum enim vel saepe,
        nostrum exercitationem tempore sit earum neque ab a quibusdam possimus.

      </p>
      <div className="flex flex-col items-stretch justify-between gap-9 bg-ddark pb-8 pl-6 pr-8 pt-7">
        <h3>So ist das Programm aufgeteilt</h3>
        <div className="flex flex-row gap-6">
          <div id="chart" className="h-40 w-40 rounded-full bg-dmedium"></div>
          <ul className="flex flex-col justify-evenly">
            <li className="flex flex-row">
              <div className="h-4 w-4 rounded-full bg-dmedium"></div>
              <p>11</p>
            </li>
            <li className="flex flex-row">
              <div className="h-4 w-4 rounded-full bg-dmedium"></div>
              <p>Test</p>
            </li>
            <li className="flex flex-row">
              <div className="h-4 w-4 rounded-full bg-dmedium"></div>
              <p>Test</p>
            </li>
            <li className="flex flex-row">
              <div className="h-4 w-4 rounded-full bg-dmedium"></div>
              <p>Test</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="gap-5 bg-ddark pb-28 pl-4 pr-6 pt-8">
        <div className="flex justify-between py-2">
          <h3>21 Tage</h3>
          <Link>
            <p className="text-xs">Alle anzeigen</p>
          </Link>
        </div>
        <ul className="flex flex-col items-stretch gap-4">
          <li className="h-25 w-full rounded-2.5xl bg-dmedium"></li>
          <li className="h-25 w-full rounded-2.5xl bg-dmedium"></li>
          <li className="h-25  w-full rounded-2.5xl bg-dmedium"></li>
          <li className="h-25  w-full rounded-2.5xl bg-dmedium"></li>
        </ul>
      </div>
      */}
    </>
  );
}

export function ProgramDetailsPage() {
  const { programId } = useParams();

  const programQuery = getProgramDetails(programId);
  if (programQuery.error) {
    console.log(programQuery.error.message);
  }
  return (
    <main className="bg-ddark">
      {programQuery.error ? (
        <Error />
      ) : programQuery.loading ? (
        <LoadingPage />
      ) : (
        <ProgramDetails programSpecs={programQuery?.data?.programs[0]} />
      )}
    </main>
  );
  // FIXME: ESLint recommends avoiding nested ternary operators. How could that be done differently?
}
