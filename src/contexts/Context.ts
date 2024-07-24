import { createContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
} from "../../node_modules/@apollo/client/index";

type Focus = "mobility" | "cardio" | "weightTraining" | "coordination";

export interface User {
  name: string;
  current: {
    day: number;
    programId: string;
    programName: string;
    exercise: {
      duration: number;
      focus: Focus;
    };
  };
  lastTimeTrained: number;
  daysInARow: number;
}

export interface ProgramType {
  id: string;
  name: string;
  difficulty: "easy" | "moderate" | "hard";
  focus: Focus;
  duration: number;
  description: string;
  workoutsWithDay: Array<{
    day: number;
    workout: {
      id: string;
      name: string;
      category: Focus;
      duration: number;
    };
  }>;
  stats: {
    mobility: number;
    cardio: number;
    weightTraining: number;
    coordination: number;
  };
}

export interface ExerciseWithReps {
  exercise: {
    id: string;
    name: string;
    description: string;
  };
  reps: number;
}

export interface ExerciseWithDuration {
  exercise: {
    id: string;
    name: string;
    description: string;
  };
  duration: number;
}

export interface Workout {
  id: string;
  name: string;
  category: Focus;
  duration: number;
  exercises: Array<ExerciseWithReps | ExerciseWithDuration>;
}

export type ExerciseTheme = "default" | "light" | "mono";

export interface UserType {
  name: string;
  image: string;
  id: string;
  current: {
    day: number;
    programId: string;
    programName: string;
    length: number;
    progress: number;
    workout: {
      id: string;
      duration: number;
      focus: string;
    };
  };
  lastTimeTrained: string;
  daysInARow: number;
}

export const ProgramContext = createContext({});
export const UserContext = createContext({});
export const ExerciseTheme = createContext({});
