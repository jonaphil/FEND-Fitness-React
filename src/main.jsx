import React from "react";
import { createRoot } from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import apolloClient from "@contexts/apollo";
import "./index.css";
import App from "./App";

loadDevMessages();
loadErrorMessages();

// React general
const container = document.getElementById("root");
const root = createRoot(container);

function Main() {
  return (
    <React.StrictMode>
      <Auth0Provider
        domain={"dev-qbdphcrys1mtef2n.us.auth0.com"}
        clientId={"5wlzsNctSqIOtuGZNKB9yF6uYCQwkht3"}
        authorizationParams={{
          redirect_uri: "http://localhost:5173/home/profile",
        }}
      >
        <ApolloProvider client={apolloClient}>
          <App />
        </ApolloProvider>
      </Auth0Provider>
    </React.StrictMode>
  );
}

root.render(<Main />);
