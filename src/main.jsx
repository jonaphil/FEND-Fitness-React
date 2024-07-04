import React from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { ApolloProvider } from "@apollo/client";
import "./index.css";
import { UserContext, apolloClient } from "@contexts/Context";
import router from "./Routing";

// React general
const container = document.getElementById("root");
const root = createRoot(container);

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
