import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { ApolloProvider } from "@apollo/client";
import { loadErrorMessages, loadDevMessages } from "@apollo/client/dev";
import apolloClient from "@contexts/apollo";
import router from "@contexts/Routing";
import "./index.css";
import { UserContext } from "@contexts/Context";

loadDevMessages();
loadErrorMessages();

// React general
const container = document.getElementById("root");
const root = createRoot(container);

function Main() {
  const userData = {
    name: "Otto",
    id: "18fj384",
    image: "/assets/images/exampleUser.jpg",
    current: {
      day: 1,
      programId: "",
      programName: "Musterprogramm",
      length: 25, // FIXME: Has to be generated!
      progress: 28, // FIXME: Has to be calculated!
      workout: {
        id: "",
        duration: 26,
        focus: "Beweglichkeit",
      },
    },
    lastTimeTrained: null,
    daysInARow: 0,
  };

  const [user, setUser] = useState(userData);

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
          <UserContext.Provider value={[user, setUser]}>
            <RouterProvider router={router} />
          </UserContext.Provider>
        </ApolloProvider>
      </Auth0Provider>
    </React.StrictMode>
  );
}

root.render(<Main />);
