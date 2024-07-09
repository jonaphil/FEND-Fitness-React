import { NavLink } from "react-router-dom";
import colors from "@utils/styles/variables";
import Home from "@assets/icons/HomeButton.svg?react";
import Dumbbell from "@assets/icons/HandleWeightButton.svg?react";
import Profile from "@assets/icons/ProfileButton.svg?react";

export default function Navi({ activeButton }) {
  //activeButton = one of {'home', 'dumbbell', 'profile'}

  /*
  // TODO Work with NavLink!
    */
  const navElements = ["Home", "Dumbbell", "Profile"];
  const navRouting = ["/home/dashboard", "/home/programs", "/home/profile"];
  return (
    <div className="fixed bottom-0 box-border flex h-12.5 w-full items-center justify-between rounded-t-[20px] bg-black bg-opacity-40 pb-3 pl-12 pr-13 pt-3">
      {/* FIXME: more elegant way of rendering the list!
      {navElements.map((el, index) => {
        return (
          <NavLink to={navRouting[index]}>
            {({ isActive }) => (
              <{ el }
              color={isActive ? `${colors.dlight}` : `${colors.dmedium}`}
            />
            )}
          </NavLink>
        )
      })} */}
      <NavLink to={navRouting[0]}>
        {({ isActive }) => (
          <Home color={isActive ? `${colors.dlight}` : `${colors.dmedium}`} />
        )}
      </NavLink>
      <NavLink to={navRouting[1]}>
        {({ isActive }) => (
          <Dumbbell
            color={isActive ? `${colors.dlight}` : `${colors.dmedium}`}
          />
        )}
      </NavLink>
      <NavLink to={navRouting[2]}>
        {({ isActive }) => (
          <Profile
            color={isActive ? `${colors.dlight}` : `${colors.dmedium}`}
          />
        )}
      </NavLink>
    </div>
  );
}
