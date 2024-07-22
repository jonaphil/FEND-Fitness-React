import { createBrowserRouter, redirect, defer } from "react-router-dom";
import ErrorPage from "@views/StatusPages/Error";
import RouterRoot from "@views/RouterRoot/index";
import HomeScreen from "@views/HomeScreen";
import Dashboard from "@views/HomeScreen/Dashboard";
import ProgramsList from "@views/HomeScreen/ProgramsList";
import Profile from "@views/HomeScreen/Profile";
import CreateEntries from "@views/HomeScreen/CreateEntries";
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
import getEntryList from "@adapters/apolloClient/queries/getEntryList";

const router = createBrowserRouter([
  //FIXME: more elegant way, 2 * "/" ??
  {
    path: "/",
    //FIXME: Warum async?
    loader: async () => {
      return redirect("/home/dashboard/");
    },
  },
  {
    path: "/",
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
              const queryRefPromise = getProgramsList();
              return defer({
                queryRefPromise,
              });
            },
          },
          {
            path: "profile/",
            element: <Profile />,
            errorElement: <ErrorPage />,
          },
          {
            path: "generator/",
            element: <CreateEntries />,
            loader: async () => {
              const queryRefPromise = getEntryList();
              return defer({
                queryRefPromise,
              });
            },
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
          const queryRefPromise = getProgramDetails(params.programId);
          return defer({
            queryRefPromise,
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
              const queryRef = getWorkoutDetails(params.workoutId);
              return queryRef;
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
