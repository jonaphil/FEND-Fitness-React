import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "@contexts/hooks";
import ProgramHero from "@components/Page Components/ProgramDetailsPage/ProgramHero";
import ProgramInfoText from "@components/Page Components/ProgramDetailsPage/ProgramInfo";
import ProgramStats from "@components/Page Components/ProgramDetailsPage/ProgramStats";
import ProgramDaysList from "@components/Page Components/ProgramDetailsPage/ProgramDaysList";
import Button from "@components/simple Components/Button";
import { ProgramContext } from "@contexts/Context";

export default function ProgramDetails() {
  const program = useContext(ProgramContext);
  const {
    name,
    focus,
    difficulty,
    duration,
    description,
    workoutsWithDay,
    stats,
  } = program;

  const { user, setUserProgram } = useUserContext();
  const handleProgramStart = () => {
    setUserProgram(program);
  };
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
        {/* <Link to={`../start/`}> */}
        <Button
          onClick={handleProgramStart}
          doubleCheck={
            user.current.progress < 100 &&
            "Wollen Sie wirklich DIESES Programm starten und ihren bisherigen Fortschritt aufgeben?"
          }
        >
          {/* doubleCheck={
            "Wollen Sie wirklich dieses Programm neu starten?" /*FIXME Add information about current program! */}
          Jetzt starten
        </Button>
        {/* </Link> */}
      </div>
    </>
  );
}
