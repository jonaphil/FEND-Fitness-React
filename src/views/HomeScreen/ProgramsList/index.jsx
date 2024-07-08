import { useLoaderData, Await } from "react-router-dom";
import CardList from "@components/Page Components/ProgramsListPage/CardList";
import SuspenseCard from "@components/simple Components/Suspense/SuspenseCard";
import LoadingElement from "@components/simple Components/Suspense/LoadingElement";
import ErrorElement from "@components/simple Components/ErrorElement";

export default function ProgramsList() {
  const data = useLoaderData();
  return (
    <>
      <h2 className="mb-10 self-start">Browse</h2>
      <SuspenseCard>
        <Await resolve={data.promise} errorElement={<ErrorElement />}>
          {(promise) => <CardList listArray={promise.data.programs} />}
        </Await>
      </SuspenseCard>
      {/* {data && <CardList listArray={data.programs} />} */}
    </>
  );
}
