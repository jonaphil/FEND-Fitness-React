import { Link } from "../../../node_modules/react-router-dom/dist/index";
import { colors } from "../../styles/variables";
import ButtonLeft from "../../media/icons/ButtonLeft.svg?react";
import ButtonRight from "../../media/icons/ButtonRight.svg?react";

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
        <div className="w-5">
          <button onClick={endPause}>
            <Link to={`../${currentExercise + 1}`}>
              <ButtonRight color={colors.dlight} />
            </Link>
          </button>
        </div>
      ) : (
        <div className="w-5" />
      )}
    </div>
  );
}
