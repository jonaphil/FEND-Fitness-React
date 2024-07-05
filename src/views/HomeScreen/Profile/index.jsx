import { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "@contexts/Context";
import Card from "@components/simple Components/Card";
import ProgressCircle from "@components/simple Components/ProgressCircle/ProgressCircle";

export default function Profile() {
  const user = useContext(UserContext);
  return (
    <>
      <h2 className="self-start">{user.name}</h2>
      <div className="mb-9 mt-22 flex flex-col items-center gap-2">
        <img
          className="h-30 w-30 rounded-full bg-gradient-blue"
          src={`${user.image}`}
          alt=""
        />
        {/* FIXME: LinkTo */}
        <Link to={"/"}>Profil bearbeiten</Link>
      </div>
      <div className="flex w-full flex-col gap-2">
        <p>Aktueller Trainingsplan</p>
        <Card size={"s"} bgColor={"dmedium"} shadow={"m-strong"}>
          <div className="flex flex-row items-center gap-6">
            <ProgressCircle
              progress={user.current.progress}
              elementSize={"15.5"}
            >
              {user.current.progress}%
            </ProgressCircle>
            <div className="flex flex-col items-stretch">
              <p>{user.current.programName}</p>
              <p className="text-xs">
                {user.current.day} von {user.current.length} geschafft
              </p>
            </div>
          </div>
        </Card>
      </div>
    </>
  );
}
