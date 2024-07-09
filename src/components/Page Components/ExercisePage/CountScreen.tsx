import { Link } from "react-router-dom";
import colors from "@utils/styles/variables";
import ButtonLeft from "@assets/icons/ButtonLeft.svg?react";
import ButtonRight from "@assets/icons/ButtonRight.svg?react";

export default function CountScreen({
  currentExercise,
  numExercises,
  endPause,
  children,
}: {
  currentExercise: number;
  numExercises: number;
  endPause: () => void;
  children: React.JSX.Element;
}): React.JSX.Element {
  return (
    <div className="box-border flex w-full flex-row items-center justify-between gap-8 px-8">
      {currentExercise > 0 ? (
        <button onClick={endPause}>
          <Link to={`../${currentExercise - 1}`}>
            <ButtonLeft color={colors.dlight} />
          </Link>
        </button>
      ) : (
        <div className="w-5" />
      )}
      <div className="flex h-58.5 w-58.5 flex-row items-center justify-center">
        {children}
      </div>
      {currentExercise + 1 < numExercises ? (
        <button onClick={endPause}>
          <Link to={`../${currentExercise + 1}`}>
            <ButtonRight color={colors.dlight} />
          </Link>
        </button>
      ) : (
        <div className="w-5" />
      )}
    </div>
  );
}
