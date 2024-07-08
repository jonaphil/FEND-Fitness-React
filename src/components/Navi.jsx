import { NavLink } from "react-router-dom";
import { colors } from "../styles/variables";
import Home from "../media/icons/HomeButton.svg?react";
import Dumbbell from "../media/icons/HandleWeightButton.svg?react";
import Profile from "../media/icons/ProfileButton.svg?react";

export default function Navi({ activeButton }) {
  //activeButton = one of {'home', 'dumbbell', 'profile'}

  /*
  // TODO Work with NavLink!
    */
  const navElements = ["Home", "Dumbbell", "Profile"];
  const navRouting = ["/", "/programs", "/profile"];
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
      <NavLink to={"/"}>
        {({ isActive }) => (
          <Home color={isActive ? `${colors.dlight}` : `${colors.dmedium}`} />
        )}
      </NavLink>
      <NavLink to={"/programs"}>
        {({ isActive }) => (
          <Dumbbell
            color={isActive ? `${colors.dlight}` : `${colors.dmedium}`}
          />
        )}
      </NavLink>
      <NavLink to={"/profile"}>
        {({ isActive }) => (
          <Profile
            color={isActive ? `${colors.dlight}` : `${colors.dmedium}`}
          />
        )}
      </NavLink>
    </div>
  );
}
