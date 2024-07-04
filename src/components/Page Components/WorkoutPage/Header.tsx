import { useContext } from "react";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import { ExerciseTheme } from "@contexts/Context";
import { colors } from "@utils/styles/variables";
import XClose from "@assets/icons/X-close.svg?react";

export default function Header({}): React.JSX.Element {
  // FIXME: Typing of exercise Theme
  const { exerciseTheme } = useContext(ExerciseTheme);
  const color = exerciseTheme === "mono" ? "dmedium" : "dlight";
  return (
    <div className="absolute box-border flex w-full flex-row justify-end pr-4 pt-4">
      <Link className={"h-3.5 w-4"} to={`../../`}>
        <XClose color={colors[color]} />
      </Link>
    </div>
  );
}
