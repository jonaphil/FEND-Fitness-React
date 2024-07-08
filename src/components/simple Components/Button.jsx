import { useState } from "react";
import Card from "./Card";

export default function Button({
  textColor = "ddark",
  bgColor = "gradient-red",
  onClick,
  children,
  small = false,
  doubleCheck, //ist ein String
}) {
  const [showConfirm, setShowConfirm] = useState(false);
  const toggleConfirm = () => {
    if (showConfirm) {
      setShowConfirm(false);
      return;
    }
    setShowConfirm(true);
    return;
  };

  if (doubleCheck) {
    console.log("doubleCheck");
    return (
      <>
        <button
          className={`bg-${bgColor} rounded-full transition-all duration-500 ${
            small
              ? "flex h-7 w-7 flex-row items-center justify-center"
              : "px-6 py-3"
          } text-${textColor}`}
          onClick={toggleConfirm}
        >
          {children}
        </button>
        {showConfirm && (
          <Confirm
            action={onClick}
            message={doubleCheck}
            cancel={toggleConfirm}
          />
        )}
      </>
    );
  }

  return (
    <button
      className={`bg-${bgColor} rounded-full transition-all duration-500 ${
        small
          ? "flex h-7 w-7 flex-row items-center justify-center"
          : "px-6 py-3"
      } text-${textColor}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

function Confirm({ action, message, cancel }) {
  return (
    <div className="fixed left-0 top-0 flex h-screen w-screen flex-col items-center justify-center bg-black bg-opacity-35">
      <Card size={"floating"} bgColor={"ddark"}>
        <p className="text-center">{message}</p>
        <div className="flex flex-row justify-center gap-14 ">
          <Button bgColor={"dmedium"} textColor={"dlight"} onClick={action}>
            Ja
          </Button>
          <Button bgColor={"dmedium"} textColor={"dlight"} onClick={cancel}>
            Nein
          </Button>
        </div>
      </Card>
    </div>
  );
}
