import { createBrowserRouter, redirect } from "react-router-dom";
import HomeScreen from "@views/HomeScreen";
import Dashboard from "@views/Dashboard";
import ProgramsList from "@views/ProgramsList";
import Profile from "@views/Profile";
import HelloWorld from "@views/HelloWorld";
import ProgramDetails from "@views/Program/ProgramDetails";
import Program from "@views/Program";
import ProgramStart from "@views/Program/ProgramStart";
import Workout from "@views/WorkoutPage";
import Exercise from "@views/ExercisePage";
import FinishWorkout from "@views/FinishWorkout";
import getProgramsList from "@adapters/queries/programsList";
import getProgramDetails from "@adapters/queries/getProgramDetails";
import getWorkoutDetails from "@adapters/queries/getWorkout";

// React Router // TODO Routing for Dashboard/Profile/ProgramsList
const router = createBrowserRouter([
  {
    path: "/home",
    element: <HomeScreen />,
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
      {
        path: "/programs",
        element: <ProgramsList />,
        loader: getProgramsList,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/",
    loader: async () => {
      redirect("/home/dashboard");
    },
  },
  {
    path: "/programs",
    element: <ProgramsList />,
    loader: getProgramsList,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  // {
  //   path: "/options",
  //   element: <CreateEntries />,
  // },
  {
    path: "/hello-world",
    element: <HelloWorld percentage={40} />,
  },
  {
    path: "/program/:programId/",
    element: <Program />,
    loader: ({ params }) => {
      return getProgramDetails(params);
    },
    children: [
      {
        path: "details/",
        element: <ProgramDetails />,
      },
      {
        path: "start/",
        element: <ProgramStart />,
      },
      {
        path: "workout/:workoutId/",
        element: <Workout />,
        id: "workout",
        loader: ({ params }) => {
          return getWorkoutDetails(params);
        },
        children: [
          {
            path: ":exerciseIndex/",
            element: <Exercise />,
          },
        ],
      },
      {
        path: "workout/:workoutId/end/",
        element: <FinishWorkout />,
      },
    ],
  },
]);

export default router;
