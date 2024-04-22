import homeWhite from "../media/icons/HomeButton-white.svg";
import homeGrey from "../media/icons/HomeButton-grey.svg";
import dumbbellWhite from "../media/icons/HandleWeightButton-white.svg";
import dumbbellGrey from "../media/icons/HandleWeightButton-grey.svg";
import profileWhite from "../media/icons/ProfileButton-white.svg";
import profileGrey from "../media/icons/ProfileButton-grey.svg";
import { Link } from "react-router-dom";

export default function Navi({ activeButton }) {
  //activeButton = one of {'home', 'dumbbell', 'profile'}
  
  /*
  TODO The Links are missing
  TODO craft real button-components
    */
  return (
    <div className="fixed bottom-0 pt-3 pb-3 pl-12 pr-13 w-full h-12.5 bg-black bg-opacity-40 rounded-t-[20px] flex justify-between items-center box-border">
      <Link  to={"/"}>
        <img src={activeButton == "home" ? homeWhite : homeGrey} alt="" className="w-[25px]" />
      </Link>
      <Link to={"/excercise-list"}>
        <img
          src={activeButton == "dumbbell" ? dumbbellWhite : dumbbellGrey}
          alt="" className="w-[37px]"
        />
      </Link>
      <Link to={"/profile"}>
        <img
          src={activeButton == "profile" ? profileWhite : profileGrey}
          alt="" className="w-[28px]" 
        />
      </Link>
    </div>
  );
}
