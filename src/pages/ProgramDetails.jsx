import { useParams, Link } from "react-router-dom";

export default function ProgramDetails({ children }) {
  const programId = useParams().programId;
  const loopArray = [0, 1, 2];
  return (
    <main className="bg-ddark">
      <div className="flex h-[75vh] w-full flex-col items-center justify-between bg-gradient-red px-5 pb-4 pt-6">
        <p className="self-end">x</p>
        <h1>{programId}</h1>
        <div className="flex w-full flex-row justify-between px-8">
          {loopArray.map((item, index) => {
            return (
              <div id={index} className="h-4 w-4 rounded-full bg-ddark">
                {" "}
              </div>
            );
          })}
        </div>
      </div>
      <p className="w-full bg-dmedium pb-4 pl-6 pr-8 pt-5">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia
        molestias quo reiciendis in iusto optio sint voluptatum enim vel saepe,
        nostrum exercitationem tempore sit earum neque ab a quibusdam possimus.
      </p>
      <div className="flex flex-col items-stretch justify-between gap-9 bg-ddark pb-8 pl-6 pr-8 pt-7">
        <h3>So ist das Programm aufgeteilt</h3>
        <div className="flex flex-row gap-6">
          <div id="chart" className="h-40 w-40 rounded-full bg-dmedium"></div>
          <ul className="flex flex-col justify-evenly">
            <li className="flex flex-row">
              <div className="h-4 w-4 rounded-full bg-dmedium"></div>
              <p>11</p>
            </li>
            <li className="flex flex-row">
              <div className="h-4 w-4 rounded-full bg-dmedium"></div>
              <p>Test</p>
            </li>
            <li className="flex flex-row">
              <div className="h-4 w-4 rounded-full bg-dmedium"></div>
              <p>Test</p>
            </li>
            <li className="flex flex-row">
              <div className="h-4 w-4 rounded-full bg-dmedium"></div>
              <p>Test</p>
            </li>
          </ul>
        </div>
      </div>
      <div className="gap-5 bg-ddark pb-28 pl-4 pr-6 pt-8">
        <div className="flex justify-between py-2">
          <h3>21 Tage</h3>
          <Link>
            <p className="text-xs">Alle anzeigen</p>
          </Link>
        </div>
        <ul className="flex flex-col items-stretch gap-4">
          <li className="rounded-2.5xl h-25 w-full bg-dmedium"></li>
          <li className="rounded-2.5xl h-25 w-full bg-dmedium"></li>
          <li className="rounded-2.5xl  h-25 w-full bg-dmedium"></li>
          <li className="rounded-2.5xl  h-25 w-full bg-dmedium"></li>
        </ul>
      </div>
    </main>
  );
}
