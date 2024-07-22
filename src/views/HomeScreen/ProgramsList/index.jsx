import { Suspense } from "react";
import { useLoaderData, Await } from "react-router-dom";
import CardList from "@components/Page Components/ProgramsListPage/CardList";
import Spinner from "@components/simple Components/Suspense/Spinner";
import ErrorElement from "@components/simple Components/ErrorElement";
import { useReadQuery } from "@apollo/client";

export default function ProgramsList() {
  const loaderData = useLoaderData();
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
        <Await
          resolve={loaderData.queryRefPromise}
          errorElement={<ErrorElement />}
        >
          {(queryRef) => <ProgramsListResolved queryRef={queryRef} />}
        </Await>
      </Suspense>
      {/* {data && <CardList listArray={data.programs} />} */}
    </>
  );
}

function ProgramsListResolved({ queryRef }) {
  const { data } = useReadQuery(queryRef);
  return <CardList listArray={data.programs} />;
}
