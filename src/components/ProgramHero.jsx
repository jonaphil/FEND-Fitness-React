import InfoCircle from "./InfoDot.jsx";
import { colors } from "../styles/variables.jsx";

export default function ProgramHero({
  name,
  focus,
  difficulty,
  duration,
}) {
  return (
    <>
      <div className="flex h-[75vh] w-full flex-col items-center justify-between bg-gradient-red px-5 pb-4 pt-6">
        <p className="self-end">x</p>
        <h1>{name}</h1>
        <div className="flex w-full flex-row justify-between px-4">
          <InfoCircle color={focus} text={focus} />
          <InfoCircle color={"ddark"} text={difficulty} />
          <InfoCircle color={"ddark"} text={`${duration} WEEKS`} />
        </div>
      </div>
    </>
  );
}
