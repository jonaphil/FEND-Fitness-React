import "../output.css";
import Navi from "../components/Navi.jsx";

export default function Dashboard({ name, currentExcercise }) {
  //  const { name, currentExcercise } = profileObj; //? Why not working?
  console.log(name);
  console.log(currentExcercise);
  return (
    <div className="bg-ddark flex flex-col gap-6">
      <div className="pl-4 pr-5 pt-10 flex flex-col items-start gap-3">
        <h1 className="">Hi {name}!</h1>
        <img
          className="self-center ml-16 mr-14 mt-6 mb-10"
          src="../media/images/Layer 11 1.png"
          alt="Picture of a human, stretching in the morning"
        />
        <div className="self-stretch flex justify-between items-center">
          <h2>Dein Workout heute</h2>
          <a href="Trainingsplan" className="text-xs">
            Trainingsplan
          </a>
        </div>

        <div className="rounded-[30px] bg-dmedium self-stretch p-8 w-93.75 h-53.75 flex flex-col justify-end">
          <div className="">
            <h3>Tag 2</h3>
            <h2>Titel des Programms</h2>
            <p className="text-xs">26 Min. - Beweglichkeit</p>
          </div>{" "}
        </div>
      </div>
      <Navi activeButton={"home"} />
    </div>
  );
}
