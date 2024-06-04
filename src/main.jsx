import React from "react";
import {useState} from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Dashboard from "./pages/Dashboard";
import ProgramsList from "./pages/ProgramsList";
import Profile from "./pages/Profile";
import HelloWorld from "./pages/HelloWorld";
import { ProgramDetails } from "./pages/ProgramDetails";
import Program from "./pages/Program";
import { ProgramStart } from "./pages/ProgramStart";
import { UserContext } from "./Context";
import "./index.css";

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
    element: <Program />,
    children: [
      {
        path: "details/",
        element: <ProgramDetails />,
      },
      {
        path: "start/",
        element: <ProgramStart />,
      },
    ],
  },
  {
    path: "/program/:programId/start",
  },
]);

// Apollo
const clientApollo = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluu29pkz000008l91dji8p5l/master",
  cache: new InMemoryCache(),
});

root.render(
  <Main />
);

function Main(){
   
  // User
  const [userData, setUserData] = useState({
  name: "Name",
  current: {
    day: 1,
    programId: "",
    programName: "Titel des Programs",
    exercise: {
      duration: 26,
      focus: "Beweglichkeit",
    },
  },
  lastTimeTrained: 0,
});


  return (
  <React.StrictMode>
    <ApolloProvider client={clientApollo}>
      <UserContext.Provider value={[userData, setUserData]}>
        <RouterProvider router={router} />
      </UserContext.Provider>
    </ApolloProvider>
  </React.StrictMode>
)

}
