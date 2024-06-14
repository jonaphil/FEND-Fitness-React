import { useContext } from "react";
import { Link } from "../../../node_modules/react-router-dom/dist/index";
import { ExerciseTheme } from "../../Context";
import { colors } from "../../styles/variables";
import XClose from "../../media/icons/X-close.svg?react";

export default function Header({}): React.JSX.Element {
  const { exerciseTheme } = useContext(ExerciseTheme);
  const color = exerciseTheme === "mono" ? "dmedium" : "dlight";
  return (
    <div className="absolute box-border flex w-full flex-row justify-end pr-4 pt-4">
      <Link className={"h-3.5 w-4"} to={`../../`}>
        <XClose color={`${colors[color]}`} />
      </Link>
    </div>
  );
}
