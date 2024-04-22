import Card from "./Card";

export default function CardList({ listArray }) {
  const genBackground = (index) => {
    switch (index) {
      case 0:
        return "gradient-red";
      case 1:
        return "gradient-green";
      case 2:
        return "gradient-blue";
    }
  };

  return (
    <ul className="p-5 mb-12.5 flex flex-col items-center gap-5">
      {listArray.map((item, index) => {
        return (
          <li key={index.toString()}>
            <Card bgColor={genBackground(index % 3)} justify={"center"}>
              <h2>{item.name}</h2>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
