import React from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import { UserContext, apolloClient } from "./Context";
import Dashboard from "./pages/Dashboard";
import ProgramsList from "./pages/ProgramsList";
import Profile from "./pages/Profile";
import HelloWorld from "./pages/HelloWorld";
import { ProgramDetails } from "./pages/ProgramDetails";
import { Program } from "./pages/Program";
import { ProgramStart } from "./pages/ProgramStart";
import Workout from "./components/Workout/Workout";
import Exercise from "./components/Exercise/Exercise";
import FinishWorkout from "./components/Workout/FinishWorkout";
import loadProgramsList from "./queries/programsList";
import loadProgramDetails from "./queries/getProgramDetails";
import loadWorkoutDetails from "./queries/getWorkout";

// React general
const container = document.getElementById("root");
const root = createRoot(container);

// React Router // TODO Routing for Dashboard/Profile/ProgramsList
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard name={"Name"} currentExcercise={"Exc3"} />,
  },
  {
    path: "/programs",
    element: <ProgramsList />,
    loader: loadProgramsList,
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
      return loadProgramDetails(params);
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
          return loadWorkoutDetails(params);
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

function Main() {
  const userData = {
    name: "Otto",
    image: "/media/images/exampleUser.jpg",
    current: {
      day: 1,
      programId: "",
      programName: "Musterprogramm",
      length: 25, //FIXME: Has to be generated!
      progress: 4, //FIXME: Has to be calculated!
      exercise: {
        id: "",
        duration: 26,
        focus: "Beweglichkeit",
      },
    },
    lastTimeTrained: null,
    daysInARow: 0,
  };

  return (
    <React.StrictMode>
      <ApolloProvider client={apolloClient}>
        <UserContext.Provider value={userData}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

root.render(<Main />);
