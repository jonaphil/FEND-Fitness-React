import { createBrowserRouter, redirect } from "react-router-dom";
import HomeScreen from "@views/HomeScreen";
import Dashboard from "@views/HomeScreen/Dashboard";
import ProgramsList from "@views/HomeScreen/ProgramsList";
import Profile from "@views/HomeScreen/Profile";
import HelloWorld from "@views/HelloWorld";
import ProgramDetails from "@views/Program/ProgramDetails";
import Program from "@views/Program";
import Training from "@views/Training";
import StartWorkout from "@views/Program/StartWorkout";
import Workout from "@views/Program/Workout";
import Exercise from "@views/Program/Workout/Exercise";
import FinishWorkout from "@views/Program/FinishWorkout";
import getProgramsList from "@adapters/queries/getProgramsList";
import getProgramDetails from "@adapters/queries/getProgramDetails";
import getWorkoutDetails from "@adapters/queries/getWorkoutDetails";

// React Router // TODO Routing for Dashboard/Profile/ProgramsList
const router = createBrowserRouter([
  {
    path: "/",
    //FIXME: Warum async?
    loader: async () => {
      return redirect("/home/dashboard/");
    },
  },
  {
    path: "/home/",
    element: <HomeScreen />,
    children: [
      {
        path: "dashboard/",
        element: <Dashboard />,
      },
      {
        path: "programs/",
        element: <ProgramsList />,
        loader: getProgramsList,
      },
      {
        path: "profile/",
        element: <Profile />,
      },
    ],
  },
  {
    path: "/hello-world",
    element: <HelloWorld percentage={40} />,
  },
  {
    path: "/program/:programId/",
    element: <Program />,
    loader: ({ params }) => {
      return getProgramDetails(params.programId);
    },
    children: [
      {
        path: "details/",
        element: <ProgramDetails />,
      },
    ],
  },
  {
    path: "/training/",
    element: <Training />,
    children: [
      {
        path: "start/",
        element: <StartWorkout />,
      },
      {
        path: "workout/:workoutId/",
        element: <Workout />,
        id: "workout",
        loader: ({ params }) => {
          return getWorkoutDetails(params.workoutId);
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
