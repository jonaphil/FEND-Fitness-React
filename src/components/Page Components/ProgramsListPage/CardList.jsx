import { Link } from "react-router-dom";
import Card from "@components/simple Components/Card";

export default function CardList({ listArray }) {
  const bgColorArr = ["gradient-red", "gradient-green", "gradient-blue"];
  // const genBackground = (index) => {
  //   switch (index) {
  //     case 0:
  //       return "gradient-red";
  //     case 1:
  //       return "gradient-green";
  //     case 2:
  //       return "gradient-blue";
  //     default:
  //       break;
  //   }
  // };

  return (
    <ul className="flex w-full flex-col items-center gap-5">
      {listArray.map((item, index) => {
        return (
          <li key={index.toString()} className="w-full">
            <Link to={`/program/${item.id}/details/`}>
              <Card bgColor={bgColorArr(index % 3)} justify={"center"}>
                <h2>{item.name}</h2>
              </Card>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
