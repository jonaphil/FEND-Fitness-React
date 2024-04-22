import Navi from "../components/Navi";
import Card from "../components/Card";
import { gql, useQuery } from "@apollo/client";
import { getProgramsList } from "../queries/programsList";
import CardList from "../components/CardList";

// function Card({ content, backgroundColor }) {
//   return (
//     <div className={`w-93.75 h-53.75 bg-${backgroundColor} text-black`}>
//       <p>{content}</p>
//     </div>
//   );
// }

function ContentList() {
  const genBackground = (int) => {
    switch (int) {
      case 0:
        return "gradient-red";
      case 1:
        return "gradient-green";
      case 2:
        return "gradient-blue";
    }
  };

  const programs = getProgramsList();

  console.log(programs);

  return (
    <ul className="p-5 mb-12.5 flex flex-col items-center gap-5">
      {programs.map((program, index) => {
        return (
          <li key={index.toString()}>
            <Card bgColor={genBackground(index % 3)} justify={"center"}>
              <h2>{program.name}</h2>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}

export default function ExcerciseList() {
  const programs = getProgramsList();
  return (
    <div className="relative bg-ddark flex flex-col gap-6 h-full w-full overflow-scroll">
      <div className="pl-4 pr-5 pt-10 flex flex-col items-start gap-3">
        <h2 className="">Browse</h2>
      </div>
      <CardList listArray={programs} />
      <Navi activeButton={"dumbbell"} />
    </div>
  );
}
