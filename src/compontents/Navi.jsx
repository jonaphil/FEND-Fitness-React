import homeWhite from "../media/icons/HomeButton-white.svg";
import homeGrey from "../media/icons/HomeButton-grey.svg";
import dumbbellWhite from "../media/icons/HandleWeightButton-white.svg";
import dumbbellGrey from "../media/icons/HandleWeightButton-grey.svg";
import profileWhite from "../media/icons/ProfileButton-white.svg";
import profileGrey from "../media/icons/ProfileButton-grey.svg";

export default function Navi({ activeButton }) {
  //activeButton = one of {'home', 'dumbbell', 'profile'}

  return (
    <div className="relative bottom-0 pt-3 pb-3 w-full bg-black bg-opacity-40 rounded-t-[20px] flex justify-around">
      <a className="w-[22px]" href="/home">
        <img src={activeButton == "home" ? homeWhite : homeGrey} alt="" />
      </a>
      <a className="w-[34px]" href="/workout-list">
        <img
          src={activeButton == "dumbbell" ? dumbbellWhite : dumbbellGrey}
          alt=""
        />
      </a>
      <a className="w-[25px]" href="/profile">
        <img
          src={activeButton == "profile" ? profileWhite : profileGrey}
          alt=""
        />
      </a>
    </div>
  );
}
