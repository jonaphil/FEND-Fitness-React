import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import Dashboard from "./pages/Dashboard";
import ProgramsList from "./pages/ProgramsList";
import Profile from "./pages/Profile";
import HelloWorld from "./pages/HelloWorld";
import { ProgramDetailsPage } from "./pages/ProgramDetails";

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
    path: "/program/:programId",
    element: <ProgramDetailsPage />,
  },
]);

// Apollo
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
