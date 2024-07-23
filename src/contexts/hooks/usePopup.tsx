import { useState } from "react";

interface OptionsObject {
  name: String;
  action: () => void;
}

interface PopUpObject {
  show: Boolean;
  message: String;
  options: Array<OptionsObject>;
}

export default function usePopup(
  message: String = undefined,
  options: Array<OptionsObject> = undefined
) {
  const [popUp, setPopUp] = useState({
    show: false,
    message,
    options: options ? [...options] : undefined,
  }) as [
    PopUpObject,
    (arg0: PopUpObject | ((arg0: PopUpObject) => PopUpObject)) => void
  ];

  const toggle = () => {
    setPopUp((prevState) => {
      return { ...prevState, show: prevState.show ? false : true };
    });
  };
  const show = () => {
    setPopUp({
      ...popUp,
      show: true,
    });
  };
  const hide = () => {
    setPopUp({
      ...popUp,
      show: false,
    });
  };

  const setObject = (Obj: PopUpObject) => {
    setPopUp({
      ...Obj,
      show: false,
    });
  };

  const Component = (): React.JSX.Element => {
    return (
      <div className="align-center absolute flex h-screen w-screen flex-col justify-center bg-black opacity-35">
        <div className="rounded-xl bg-dmedium p-8">
          <p>{popUp.message}</p>
          <div className="flex flex-row gap-4">
            {popUp.options.map((option) => {
              return (
                <button
                  className="rounded-full bg-ddark px-4 py-2"
                  onClick={option.action}
                >
                  {option.name}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    );
  };
  return {
    data: {
      Component,
      show: popUp.show,
    },
    set: { toggle, show, hide, object: setObject },
  };
}
