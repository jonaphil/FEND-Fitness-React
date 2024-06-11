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
import { ProgramComp } from "./pages/Program";
import { ProgramStart } from "./pages/ProgramStart";
import Workout from "./components/Workout";
import Exercise from "./components/Exercise";
import loadProgramsList from "./queries/programsList";
import loadProgramDetails from "./queries/getProgramDetails";
import loadWorkoutDetails from "./queries/getWorkout";

// React general
const container = document.getElementById("root");
const root = createRoot(container);

// React Router
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
  {
    path: "/hello-world",
    element: <HelloWorld percentage={40} />,
  },
  {
    path: "/program/:programId/",
    element: <ProgramComp />,
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
    ],
  },
]);

function Main() {
  // User
  //  const [userData, setUserData] = useState({
  //   name: "Name",
  //   current: {
  //     day: 1,
  //     programId: "",
  //     programName: "Titel des Programs",
  //     exercise: {
  //       duration: 26,
  //       focus: "Beweglichkeit",
  //     },
  //   },
  //   lastTimeTrained: 0,
  //   daysInARow: 0,
  // });
  const userData = {
    name: "Name",
    current: {
      day: 1,
      programId: "",
      programName: "Titel des Programs",
      exercise: {
        id: "",
        duration: 26,
        focus: "Beweglichkeit",
      },
    },
    lastTimeTrained: 0,
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
