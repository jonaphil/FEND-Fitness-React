import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@contexts/Context";
import MainScreen from "@components/MainScreen";
import Card from "@components/Card";
import WomanSVG from "@assets/icons/WomanYoga.svg?react";

// import "../output.css";

export default function Dashboard() {
  const user = useContext(UserContext);
  return (
    <MainScreen page={"home"}>
      <h1 className="self-start">Hi {user.name}!</h1>
      {/* FIXME Correct way of using a picture? as an svg?*/}
      <WomanSVG
        className={"mb-6 mt-4 min-h-40 self-center"}
        alt={"Picture of a human, stretching in the morning"}
      />
      <div className="flex items-center justify-between self-stretch justify-self-center">
        <h2>Dein Workout heute</h2>
        <Link className={"text-xs"} to={"/"}>
          {/* FIXME Link to */}
          Trainingsplan
        </Link>
      </div>

      <Card bgColor={"dmedium"} justify={"end"} shadow={"l"} size={"m"}>
        <h3>Tag {user.current.day}</h3>
        <h2>{user.current.programName}</h2>
        <p className="pt-1 text-xs">
          {user.current.exercise.duration} min - {user.current.exercise.focus}
        </p>
      </Card>
    </MainScreen>
  );
}
