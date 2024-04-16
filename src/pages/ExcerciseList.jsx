import Navi from "../components/Navi";
import Card from "../components/Card";
import { gql, useQuery } from "@apollo/client";

const GET_PROGRAMS = gql`
  query GetPrograms {
    programs {
      id
      name
      duration
    }
  }
`;

// function Card({ content, backgroundColor }) {
//   return (
//     <div className={`w-93.75 h-53.75 bg-${backgroundColor} text-black`}>
//       <p>{content}</p>
//     </div>
//   );
// }

function ContentList({
  contentArray = ["Content1", "Content2", "Content3", "Content4"],
}) {
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

  const { loading, error, data } = useQuery(GET_PROGRAMS);

  if (loading) return <Card content="Loading..." backgroundColor="blue" />;
  if (error)
    return <Card content={`Error! ${error.message}`} backgroundColor="red" />;

  console.log(data.programs);

  return (
    <ul className="p-5 flex flex-col items-center gap-5">
      {data.programs.map((program, index) => {
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
  return (
    <div className="relative bg-ddark flex flex-col gap-6 h-full w-full">
      <div className="pl-4 pr-5 pt-10 flex flex-col items-start gap-3">
        <h2 className="">Browse</h2>
      </div>
      <ContentList />
      <Navi activeButton={"dumbbell"} />
    </div>
  );
}
