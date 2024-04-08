import { useState } from "react";
import logo from "./logo.svg";
import "./output.css";
import Dashboard from "./compontents/Dashboard.jsx";

function App() {
  return (
    <div className="max-w-[414px] max-h-[736px]">
      <Dashboard name={"Jonathan"} currentExcercise={"Exc3"} />
    </div>
  );
}

export default App;
