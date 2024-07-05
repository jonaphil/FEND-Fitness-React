import React, { useState } from "react";
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
    id: "18fj384",
    image: "/media/images/exampleUser.jpg",
    current: {
      day: 1,
      programId: "",
      programName: "Musterprogramm",
      length: 25, //FIXME: Has to be generated!
      progress: 28, //FIXME: Has to be calculated!
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
      <ApolloProvider client={apolloClient}>
        <UserContext.Provider value={[user, setUser]}>
          <RouterProvider router={router} />
        </UserContext.Provider>
      </ApolloProvider>
    </React.StrictMode>
  );
}

root.render(<Main />);
