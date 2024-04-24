import "../output.css";
import Navi from "../components/Navi.jsx";
import MainScreen from "../components/MainScreen.jsx";
import Card from "../components/Card.jsx";

export default function Dashboard({ name, currentExcercise }) {
  //  const { name, currentExcercise } = profileObj; //? Why not working?
  console.log(name);
  console.log(currentExcercise);
  return (
    <MainScreen page={"home"}>
      <h1 className="self-start">Hi {name}!</h1>
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
        <h3>Tag 2</h3>
        <h2>Titel des Programms</h2>
        <p>26 min - Beweglichkeit</p>
      </Card>

      {/*FIXME: White space at the end of document!*/}
    </MainScreen>
  );
}
