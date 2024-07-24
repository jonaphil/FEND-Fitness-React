import { ProgramType } from "@contexts/Context";

interface CurrentProgramData {
  day: number;
  programId: string;
  programName: string;
  length: number; //FIXME: Has to be generated!
  progress: number; //FIXME: Has to be calculated!
  workout: {
    id: string;
    duration: number;
    focus: string;
  };
}

export default function generateCurrentProgramData(
  day: number,
  program: ProgramType
): CurrentProgramData {
  const {
    id: programId,
    name: programName,
    duration,
    workoutsWithDay,
  } = program;

  const length = duration * 7;
  const currentWorkout =
    workoutsWithDay[(day - 1) % workoutsWithDay.length].workout;

  const programDataObject = {
    day,
    programId: program.id,
    programName: program.name,
    length,
    progress: Math.round(((day - 1) * 100) / length),
    workout: {
      id: currentWorkout.id,
      duration: currentWorkout.duration,
      focus: currentWorkout.category,
    },
  };

  return programDataObject;
}
