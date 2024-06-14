import { useContext } from "react";
import { Link } from "react-router-dom";
import ProgramHero from "../components/ProgramDetails/ProgramHero";
import ProgramInfoText from "../components/ProgramDetails/ProgramInfo";
import ProgramStats from "../components/ProgramDetails/ProgramStats";
import ProgramDaysList from "../components/ProgramDetails/ProgramDaysList";
import Button from "../components/Button";
import { ProgramContext } from "../Context";

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

export function ProgramDetails() {
  const {
    id,
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
        <Link to={`../start/`}>
          <Button>Jetzt starten</Button>
        </Link>
      </div>
    </>
  );
}
