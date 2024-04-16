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

// React general
const container = document.getElementById("root");
const root = createRoot(container);

// React Router TODO
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
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
