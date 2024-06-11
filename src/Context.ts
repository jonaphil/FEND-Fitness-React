import { createContext } from "react";
import {
  ApolloClient,
  InMemoryCache,
} from "../node_modules/@apollo/client/index";

type Focus = "mobility" | "cardio" | "weightTraining" | "coordination";

export interface User {
  name: String;
  current: {
    day: Number;
    programId: String;
    programName: String;
    exercise: {
      duration: Number;
      focus: Focus;
    };
  };
  lastTimeTrained: Number;
  daysInARow: Number;
}

export interface ProgramType {
  name: String;
  difficulty: "easy" | "moderate" | "hard";
  focus: Focus;
  duration: Number;
  description: String;
  workoutsWithDay: Array<{
    day: Number;
    workout: {
      id: String;
      name: String;
      category: Focus;
      duration: Number;
    };
  }>;
  stats: {
    mobility: Number;
    cardio: Number;
    weightTraining: Number;
    coordination: Number;
  };
}

export interface ExerciseWithReps {
  exercise: {
    id: String;
    name: String;
    description: String;
  };
  reps: Number;
}

export interface ExerciseWithDuration {
  exercise: {
    id: String;
    name: String;
    description: String;
  };
  duration: Number;
}

export interface Workout {
  id: String;
  name: String;
  category: Focus;
  duration: Number;
  exercises: Array<ExerciseWithReps | ExerciseWithDuration>;
}

export const ProgramContext = createContext({});
export const UserContext = createContext({});
export const apolloClient = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluu29pkz000008l91dji8p5l/master",
  cache: new InMemoryCache(),
});
