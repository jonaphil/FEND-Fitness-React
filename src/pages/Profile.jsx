import MainScreen from "../components/MainScreen";
import Card from "../components/Card";

export default function Profile() {
  /*
  TODO
  This Component is just a sketch, to have a working page. There are real components Missing, especially the progress-card
  */
  return (
    <MainScreen page={"profile"} >
      <h2 className="self-start">Name</h2>
      <div className="flex flex-col items-center mt-12 mb-20 gap-2">
        <img
          className="bg-gradient-blue w-30 h-30 rounded-full"
          src=""
          alt=""
        />
        <p>Profil bearbeiten</p>
      </div>
      <div className="w-full flex flex-col gap-2">
        <p>Aktueller Trainingsplan</p>
        <Card size={"s"} bgColor={"dmedium"}>
            <div className="w-15 h-15">Progress</div>
            <div className="flex flex-col">
              <p>Titel</p>
              <p className="text-xs">1 von 8 geschafft</p>
            </div>
        </Card>
      </div>
    </MainScreen>
  );
}
