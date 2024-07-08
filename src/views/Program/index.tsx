import { Suspense } from "react";
import { Outlet, Await } from "react-router-dom";
import getProgramStats from "@utils/helpers/getProgramStats";
import LoadingPage from "@views/StatusPages/Loading";
import ErrorPage from "@views/StatusPages/Error";
import { ProgramContext } from "@contexts/Context";
import { useLoaderData } from "react-router-dom";

export default function Program(): React.JSX.Element {
  const data = useLoaderData();

  return (
    <main className="bg-ddark">
      <Suspense fallback={<LoadingPage />}>
        <Await resolve={data.promise} errorElement={ErrorPage}>
          {(promise) => (
            <ProgramContext.Provider
              value={{
                ...promise?.data?.programs[0],
                stats: getProgramStats(
                  promise?.data?.programs[0].workoutsWithDay
                ),
              }}
            >
              <div className="min-w-screen flex h-screen flex-col items-stretch overflow-scroll bg-ddark">
                <Outlet />
              </div>
            </ProgramContext.Provider>
          )}
        </Await>
      </Suspense>
    </main>
  );
}
