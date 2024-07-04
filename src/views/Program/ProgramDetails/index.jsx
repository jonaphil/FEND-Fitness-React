import { useContext } from "react";
import { Link } from "react-router-dom";
import ProgramHero from "@components/Page Components/ProgramDetailsPage/ProgramHero";
import ProgramInfoText from "@components/Page Components/ProgramDetailsPage/ProgramInfo";
import ProgramStats from "@components/Page Components/ProgramDetailsPage/ProgramStats";
import ProgramDaysList from "@components/Page Components/ProgramDetailsPage/ProgramDaysList";
import Button from "@components/simple Components/Button";
import { ProgramContext } from "@contexts/Context";

export default function ProgramDetails() {
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
