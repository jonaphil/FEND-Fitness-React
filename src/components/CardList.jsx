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

  if (listArray.length === 0) {
    return (
      <Card bgColor="dmedium" justify={"center"}>
        <h3>Loading</h3>
      </Card>
    );
  }

  return (
    <ul className="flex w-full flex-col items-center gap-5">
      {listArray.map((item, index) => {
        return (
          <li key={index.toString()} className="w-full">
            <Card bgColor={genBackground(index % 3)} justify={"center"}>
              <h2>{item.name}</h2>
            </Card>
          </li>
        );
      })}
    </ul>
  );
}
