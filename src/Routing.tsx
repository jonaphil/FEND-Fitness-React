import { createBrowserRouter, redirect, defer } from "react-router-dom";
import ErrorPage from "@views/StatusPages/Error";
import RouterRoot from "@views/RouterRoot/index";
import HomeScreen from "@views/HomeScreen";
import Dashboard from "@views/HomeScreen/Dashboard";
import ProgramsList from "@views/HomeScreen/ProgramsList";
import Profile from "@views/HomeScreen/Profile";
import HelloWorld from "@views/HelloWorld";
import Program from "@views/Program";
import ProgramDetails from "@views/Program/ProgramDetails";
import Training from "@views/Training";
import StartWorkout from "@views/Training/StartWorkout";
import Workout from "@views/Training/Workout";
import Exercise from "@views/Training/Workout/Exercise";
import FinishWorkout from "@views/Training/FinishWorkout";
import LoadingPage from "@views/StatusPages/Loading";
import getProgramsList from "@adapters/apolloClient/queries/getProgramsList";
import getProgramDetails from "@adapters/apolloClient/queries/getProgramDetails";
import getWorkoutDetails from "@adapters/apolloClient/queries/getWorkoutDetails";

const router = createBrowserRouter([
  //FIXME: more elegant way, 2 * "/" ??
  {
    path: "/",
    loader: async () => {
      return redirect("/home/dashboard/");
    },
  },
  {
    path: "/",
    //FIXME: Warum async?

    element: <RouterRoot />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "home/",
        element: <HomeScreen />,
        children: [
          {
            path: "dashboard/",
            element: <Dashboard />,
            errorElement: <ErrorPage />,
          },
          {
            path: "programs/",
            element: <ProgramsList />,
            errorElement: <ErrorPage />,
            loader: async () => {
              const programsPromise = getProgramsList();
              return defer({
                promise: programsPromise,
              });
            },
          },
          {
            path: "profile/",
            element: <Profile />,
            errorElement: <ErrorPage />,
          },
        ],
      },
      {
        path: "hello-world",
        element: <LoadingPage />,
      },
      {
        path: "program/:programId/",
        element: <Program />,
        loader: async ({ params }) => {
          const promise = getProgramDetails(params.programId);
          return defer({
            promise,
          });
        },
        children: [
          {
            path: "details/",
            element: <ProgramDetails />,
          },
        ],
      },
      {
        path: "training/",
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
    ],
  },
]);

export default router;
