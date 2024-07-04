import { Link } from "react-router-dom";
import InfoDot from "./InfoDot";
import XClose from "@assets/icons/X-close.svg?react";
import germanTranslation from "@utils/helpers/translations";

export default function ProgramHero({ name, focus, difficulty, duration }) {
  const colorDifficulty = {
    easy: "dlight",
    moderate: "dmedium",
    hard: "ddark",
  };

  return (
    <>
      <div className="flex h-[75vh] w-full flex-col items-center justify-between bg-gradient-red px-5 pb-4 pt-6">
        <div className="self-end">
          <Link to={"/programs"}>
            <XClose />
          </Link>
        </div>
        <h1>{name}</h1>
        <div className="flex w-full flex-row justify-between px-4">
          <InfoDot color={focus} text={germanTranslation[focus]} />
          <InfoDot
            color={colorDifficulty[difficulty]}
            text={germanTranslation[difficulty]}
          />
          <InfoDot
            size={Math.floor(Math.sqrt(duration) * 2)}
            color={"ddark"}
            text={`${duration} Wochen`}
          />
        </div>
      </div>
    </>
  );
}
