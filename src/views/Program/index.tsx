import { Suspense } from "react";
import { Outlet, Await, useLoaderData } from "react-router-dom";
import { useReadQuery } from "@apollo/client";
import getProgramStats from "@utils/helpers/getProgramStats";
import LoadingPage from "@views/StatusPages/Loading";
import ErrorPage from "@views/StatusPages/Error";
import { ProgramContext } from "@contexts/Context";

export default function Program(): React.JSX.Element {
  const { queryRefPromise } = useLoaderData();

  return (
    <main className="bg-ddark">
      <Suspense fallback={<LoadingPage />}>
        <Await resolve={queryRefPromise} errorElement={ErrorPage}>
          {(queryRef) => (
            <ProgramContextResolved queryRef={queryRef}>
              <Outlet />
            </ProgramContextResolved>
          )}
        </Await>
      </Suspense>
    </main>
  );
}

function ProgramContextResolved({ queryRef, children }) {
  const { data } = useReadQuery(queryRef);
  return (
    <>
      <ProgramContext.Provider
        value={{
          ...data.programs[0],
          stats: getProgramStats(data.programs[0].workoutsWithDay),
        }}
      >
        <div className="min-w-screen flex h-screen flex-col items-stretch overflow-scroll bg-ddark">
          {children}
        </div>
      </ProgramContext.Provider>
    </>
  );
}
