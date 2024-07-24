import Button from "@components/simple Components/Button";
import { useUserContext } from "@contexts/hooks";
import { useFinish } from "@contexts/hooks";
import isYesterday from "@utils/dateAndTime";

export default function FinishWorkout(): React.JSX.Element {
  const { user } = useUserContext();
  const { finishWorkout } = useFinish();
  const { daysInARow } = user;
  const today = new Date();
  const streak = isYesterday(
    today.getTime(),
    parseInt(user.lastTimeTrained, 10)
  )
    ? daysInARow + 1
    : 1;
  // FIXME: some kind of asynchrone behavior

  const buttons = [
    { title: "Sehr gut", vote: () => finishWorkout(1) },
    { title: "Geht So", vote: () => finishWorkout(0) },
    { title: "Gar nicht", vote: () => finishWorkout(-1) },
  ];
  return (
    <div
      className={"flex min-h-screen flex-col items-center justify-center gap-8"}
    >
      <div className={"flex flex-col items-center"}>
        <h1 className={"text-center"}>Herzlichen Glückwunsch!</h1>
        <h3>
          Du hast es geschafft. Du hast {streak} Tag
          {streak !== 1 && "e in Folge"} trainiert.
        </h3>
      </div>
      <p>Wie hat dir das heutige Workout gefallen?</p>
      <div className="box-content flex w-full flex-row items-center justify-around">
        {buttons.map((button) => {
          return (
            <Button
              key={`${button.title}`}
              rounded={"xl"}
              border={4}
              bgColor={"dmedium"}
              textColor={"dlight"}
              onClick={button.vote}
            >
              {button.title}
            </Button>
          );
        })}
      </div>
    </div>
  );
}
