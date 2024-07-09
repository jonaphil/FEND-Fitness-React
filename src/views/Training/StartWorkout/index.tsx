import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserContext } from "@contexts/hooks";
import colors from "@utils/styles/variables";
import Button from "@components/simple Components/Button";
import { UserType } from "@contexts/Context";
import ButtonGoBack from "@assets/icons/ButtonGoBack.svg?react";
import germanTranslation from "@utils/helpers/translations";

interface HeaderProps {
  absolute: Boolean;
  text: String;
}

export default function StartWorkout(): React.JSX.Element {
  //FIXME Use UserContext instead of ProgramContext!
  const { user } = useUserContext() as UserType;
  const { id, current } = user;
  const { day, name, workout } = current;
  return (
    <div className="relative flex min-h-screen w-full flex-col items-center justify-between p-4 pb-16">
      <Header absolute={false} text={name} />
      <div className="flex flex-col items-center gap-4">
        <h1>Tag {day}</h1>
        <p className="text-xs">
          {`${workout.duration} Min. ${String.fromCharCode(0x00b7)} ${
            germanTranslation[workout.focus]
          }`}
        </p>
      </div>
      <Link to={`../workout/${workout.id}/0`}>
        <Button>los</Button>
      </Link>
    </div>
  );
}

function Header({ absolute, text }: HeaderProps): React.JSX.Element {
  const navigate = useNavigate();
  const goBackHandler = () => navigate(-1);
  return (
    <div
      className={`${
        absolute && "absolute"
      } flex w-full flex-row justify-between`}
    >
      <div className="w-5"></div>
      <p className="justify-self-center text-2xs">{text}</p>
      {/* <Link to={`../details`}> */}

      <button onClick={goBackHandler}>
        <ButtonGoBack color={`${colors.dlight}`} />
      </button>
      {/* </Link> */}
    </div>
  );
}
