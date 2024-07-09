import { useContext } from "react";
import isEven from "@utils/helpers/generalFunctions";
import {
  ExerciseTheme,
  ExerciseWithDuration,
  ExerciseWithReps,
} from "@contexts/Context";

export default function StatusList({
  exerciseList,
  currentExercise,
}: {
  exerciseList: Array<ExerciseWithDuration | ExerciseWithReps>;
  currentExercise: number;
}): React.JSX.Element {
  const { exerciseTheme } = useContext(ExerciseTheme);
  const lineColor = exerciseTheme === "light" ? "ddark" : "dmedium";
  const fillingColor = exerciseTheme === "mono" ? "dmedium" : "gradient-red";
  return (
    <div className="max-w-full overflow-hidden">
      <div
        style={{ transform: `translateX(-${currentExercise * 6}rem)` }}
        className="transition-all duration-700"
      >
        <div className="translate-x-1/2">
          <div className="top-12 mt-8 flex w-fit -translate-x-4 flex-row items-center justify-center self-start overflow-hidden">
            {exerciseList.map((w, i: number) => {
              return (
                <div key={w.exercise.id} className="flex flex-row items-center">
                  {i !== 0 && (
                    <Connection
                      key={`Connection-${w.exercise.id}-${i}`}
                      color={lineColor}
                    />
                  )}
                  <div
                    key={`dot-${w.exercise.id}-${i}`}
                    className={`box-border h-8 w-8 rounded-full transition-all duration-1000 ${
                      i > currentExercise && `border-4 border-${lineColor}`
                    }`}
                  >
                    <div
                      key={`filling-${w.exercise.id}-${i}`}
                      className={`absolute rounded-full transition-opacity duration-1000 ${
                        i <= currentExercise
                          ? `h-8 w-8 bg-${fillingColor} opacity-100`
                          : "opacity-0"
                      }`}
                    />
                  </div>
                </div>
              );
            })}
            {isEven(length) && <div className="w-20" />}
          </div>
        </div>
      </div>
    </div>
  );
}

function Connection({
  color = "dmedium",
}: {
  color: string;
}): React.JSX.Element {
  return (
    <div className={`h-0 w-16 border-t-4 border-dotted border-${color}`}></div>
  );
}
