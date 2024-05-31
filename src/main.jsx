import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import Dashboard from "./pages/Dashboard";
import ProgramsList from "./pages/ProgramsList";
import Profile from "./pages/Profile";
import HelloWorld from "./pages/HelloWorld";
import ProgramDetails from "./pages/ProgramDetails";
import CreateEntries from "./helpers/CreateEntries";

// React general
const container = document.getElementById("root");
const root = createRoot(container);

// React Router TODO
const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard name={"Name"} currentExcercise={"Exc3"} />,
  },
  {
    path: "/programs-list",
    element: <ProgramsList />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: "/options",
    element: <CreateEntries />,
  },
  {
    path: "/hello-world",
    element: <HelloWorld percentage={40} />,
  },
  {
    path: "/program/:programId",
    element: <ProgramDetails />,
  },
]);

const clientApollo = new ApolloClient({
  uri: "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/cluu29pkz000008l91dji8p5l/master",
  cache: new InMemoryCache(),
});

root.render(
  <React.StrictMode>
    <ApolloProvider client={clientApollo}>
      <RouterProvider router={router} />
    </ApolloProvider>
  </React.StrictMode>
);
