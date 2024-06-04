import { useContext } from "react";
import { UserContext } from "../Context";
import MainScreen from "../components/MainScreen";
import Card from "../components/Card";
// import "../output.css";

export default function Dashboard() {
  const [user, setUser] = useContext(UserContext);
  // TODO Rework dashboard, svg, Links, etc.
  return (
    <MainScreen page={"home"}>
      <h1 className="self-start">Hi {user.name}!</h1>
      <img
        className="mb-6 mt-3 self-center"
        src="../media/images/Layer 11 1.png"
        alt="Picture of a human, stretching in the morning"
      />
      <div className="flex items-center justify-between self-stretch justify-self-center">
        <h2>Dein Workout heute</h2>
        <a href="Trainingsplan" className="text-xs">
          Trainingsplan
        </a>
      </div>

      <Card bgColor={"dmedium"} justify={"end"} shadow={"l"}>
        <h3>Tag {user.current.day}</h3>
        <h2>{user.current.programName}</h2>
        <p>
          {user.current.exercise.duration} min - {user.current.exercise.focus}
        </p>
      </Card>

      {/*FIXME: White space at the end of document!*/}
    </MainScreen>
  );
}
