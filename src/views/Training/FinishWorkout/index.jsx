import Button from "@components/simple Components/Button";
import { useUserContext } from "@contexts/hooks";
import { useFinish } from "@contexts/hooks";
import isYesterday from "@utils/dateAndTime";
export default function FinishWorkout() {
    var user = useUserContext().user;
    var finishWorkout = useFinish().finishWorkout;
    var daysInARow = user.daysInARow;
    var today = new Date();
    var streak = isYesterday(today.getTime(), parseInt(user.lastTimeTrained, 10))
        ? daysInARow + 1
        : 1;
    // FIXME: some kind of asynchrone behavior
    var buttons = [
        { title: "Sehr gut", vote: function () { return finishWorkout(1); } },
        { title: "Geht So", vote: function () { return finishWorkout(0); } },
        { title: "Gar nicht", vote: function () { return finishWorkout(-1); } },
    ];
    return (<div className={"flex min-h-screen flex-col items-center justify-center gap-8"}>
      <div className={"flex flex-col items-center"}>
        <h1 className={"text-center"}>Herzlichen Glückwunsch!</h1>
        <h3>
          Du hast es geschafft. Du hast {streak} Tag
          {streak !== 1 && "e in Folge"} trainiert.
        </h3>
      </div>
      <p>Wie hat dir das heutige Workout gefallen?</p>
      <div className="box-content flex w-full flex-row items-center justify-around">
        {buttons.map(function (button) {
            return (<Button key={"".concat(button.title)} rounded={"xl"} border={4} bgColor={"dmedium"} textColor={"dlight"} onClick={button.vote}>
              {button.title}
            </Button>);
        })}
      </div>
    </div>);
}
