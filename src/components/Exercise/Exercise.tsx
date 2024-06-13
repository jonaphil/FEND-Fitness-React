import { useContext } from "react";
import {
  useNavigate,
  useOutletContext,
} from "../../../node_modules/react-router-dom/dist/index";
import {
  ExerciseTheme,
  ExerciseWithDuration,
  ExerciseWithReps,
} from "../../Context";
import Button from "../Button";
import CountScreen from "./CountScreen";
import ExerciseCounter from "./ExerciseCounter";

export default function Exercise({}): React.JSX.Element {
  const {
    currentExercise,
    setCurrentExercise,
    numExercises,
    exercise,
    pauseState,
  }: {
    currentExercise: number;
    setCurrentExercise: (arg0: number) => void;
    numExercises: number;
    exercise: ExerciseWithDuration | ExerciseWithReps;
    pauseState: [boolean, (arg0: boolean) => void];
  } = useOutletContext();
  const [pause, setPause] = pauseState as [boolean, (arg0: boolean) => void];
  const { exerciseTheme, setExerciseTheme } = useContext(ExerciseTheme);
  const navigate = useNavigate();
  const isLast = currentExercise === numExercises - 1;

  const { name, description, id } = exercise.exercise;
  const type = exercise.reps ? "reps" : "duration";
  const count = exercise.reps ? exercise.reps : exercise.duration;

  const setNextExercise = () => {
    endPause();
    if (isLast) {
      navigate(`../end/`, { relative: "path" }); // Why is this just working with the relative?
    } else {
      navigate(`../${currentExercise + 1}/`);
    }
  };

  const doPause = () => {
    setExerciseTheme("light");
    setPause(true);
  };

  const endPause = () => {
    setExerciseTheme("default");
    setPause(false);
  };

  if (pause) {
    // setTheme !
    return (
      <>
        <CountScreen
          currentExercise={currentExercise}
          numExercises={numExercises}
          endPause={endPause}
        >
          <ExerciseCounter
            key={`pause-${id}`}
            type={"duration"}
            count={15}
            id={`pause-${id}`}
            nextStep={setNextExercise}
          />
        </CountScreen>
        <h1>Pause</h1>
        <Button bgColor="ddark" textColor="dlight" onClick={setNextExercise}>
          Überspringen
        </Button>
      </>
    );
  }

  return (
    <>
      <CountScreen
        currentExercise={currentExercise}
        numExercises={numExercises}
        endPause={endPause}
      >
        <ExerciseCounter
          key={`${id}`}
          type={type}
          count={count}
          id={id}
          nextStep={!isLast ? doPause : setNextExercise}
        />
      </CountScreen>
      <h1>{name}</h1>
      {type === "reps" ? (
        <Button
          bgColor={isLast ? "gradient-red" : "dmedium"}
          textColor={isLast ? "ddark" : "dlight"}
          onClick={isLast ? setNextExercise : doPause}
        >
          geschafft
        </Button>
      ) : (
        <p className="px-6 py-3 opacity-0">geschafft</p>
      )}
    </>
  );
}
