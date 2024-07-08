import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import CardList from "@components/Page Components/ProgramsListPage/CardList";
import Spinner from "@components/simple Components/Suspense/Spinner";
import ErrorElement from "@components/simple Components/ErrorElement";

export default function ProgramsList() {
  const data = useLoaderData();
  return (
    <>
      <h2 className="mb-10 self-start">Browse</h2>

      <Suspense
        fallback={
          <div className="p-25">
            <Spinner />
          </div>
        }
      >
        <Await resolve={data.promise} errorElement={<ErrorElement />}>
          {(promise) => <CardList listArray={promise.data.programs} />}
        </Await>
      </Suspense>
      {/* {data && <CardList listArray={data.programs} />} */}
    </>
  );
}
