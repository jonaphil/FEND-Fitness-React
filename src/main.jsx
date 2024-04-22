import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  gql,
} from "@apollo/client";

import Dashboard from "./pages/Dashboard";
import ExcerciseList from "./pages/ExcerciseList";
import Profile from "./pages/Profile";

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
    path: "/excercise-list",
    element: <ExcerciseList/>,
  },
  {
    path: "/profile",
    element: <Profile/>,
  }
]);

//Apollo TODO
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
