import "../output.css";
import Navi from "./Navi.jsx";

export default function Dashboard({ name, currentExcercise }) {
  //  const { name, currentExcercise } = profileObj; //? Why not working?
  console.log(name);
  console.log(currentExcercise);
  return (
    <div className="bg-ddark flex flex-col gap-6">
      <div className="pl-4 pr-5 pt-10 flex flex-col items-start">
        <h1 className="">Hi, {name}!</h1>
        <img
          className="self-center ml-16 mr-14 mt-6 mb-10"
          src="../media/images/Layer 11 1.png"
          alt="Picture of a human, stretching in the morning"
        />
        <div className="self-stretch flex justify-between items-center">
          <h2>Dein Trainingsplan</h2>
          <a href="Trainingsplan" className="fontSize-s">
            Dein Trainingsplan
          </a>
        </div>

        <div className="rounded-[30px] bg-dmedium self-stretch p-8">
          <div className="h-1/2"></div>
          <div>
            <h3>Tag 2</h3>
            <h2>Titel des Programms</h2>
            <p className="fontSize-s">26 Min. - Beweglichkeit</p>
          </div>{" "}
        </div>
      </div>
      <Navi activeButton={"home"} />
    </div>
  );
}
