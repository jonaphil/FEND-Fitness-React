import { useState } from "react";
import logo from "./logo.svg";
import "./output.css";
import Dashboard from "./compontents/Dashboard.jsx";

function App() {
  return (
    <>
      <Dashboard name={"Jonathan"} currentExcercise={"Exc3"} />
    </>
  );
}

export default App;
