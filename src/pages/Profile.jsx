import MainScreen from "../components/MainScreen";
import Card from "../components/Card";

export default function Profile() {
  /*
  TODO
  This Component is just a sketch, to have a working page. There are real components Missing, especially the progress-card
  */
  return (
    <MainScreen page={"profile"}>
      <h2 className="self-start">Name</h2>
      <div className="mb-20 mt-12 flex flex-col items-center gap-2">
        <img
          className="h-30 w-30 rounded-full bg-gradient-blue"
          src=""
          alt=""
        />
        <p>Profil bearbeiten</p>
      </div>
      <div className="flex w-full flex-col gap-2">
        <p>Aktueller Trainingsplan</p>
        <Card size={"s"} bgColor={"dmedium"} shadow={"m-strong"}>
          <div className="flex flex-row gap-6">
            <div className="h-16 w-16 bg-gradient-blue">40%</div>
            <div className="flex flex-col">
              <p>Titel</p>
              <p className="text-xs">1 von 8 geschafft</p>
            </div>
          </div>
        </Card>
      </div>
    </MainScreen>
  );
}
