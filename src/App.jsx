import "./output.css";
import Dashboard from "./pages/Dashboard.jsx";
import ExcerciseList from "./pages/ExcerciseList.jsx";

function App() {
  return (
    <div className="w-[414px] h-[736px]">
      <Dashboard name={"Name"} currentExcercise={"Exc3"} />
      {/* <ExcerciseList /> */}
    </div>
  );
}

export default App;
