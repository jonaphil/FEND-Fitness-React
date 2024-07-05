import { Outlet } from "react-router-dom";
import getProgramStats from "@utils/helpers/getProgramStats";
import LoadingPage from "@views/StatusPages/Loading";
import ErrorPage from "@views/StatusPages/Error";
import { ProgramContext, ProgramType } from "@contexts/Context";
import { useLoaderData } from "react-router-dom";

export default function Program(): React.JSX.Element {
  const programQuery = useLoaderData();

  if (programQuery.loading) {
    return <LoadingPage />;
  }
  if (programQuery.error) {
    console.log(
      `An Error occured fetching the program data: ${programQuery.error.message}`
    );
    return <ErrorPage />;
  }

  const programObj: ProgramType = {
    ...programQuery?.data?.programs[0],
    stats: getProgramStats(programQuery?.data?.programs[0].workoutsWithDay),
  };
  return (
    <main className="bg-ddark">
      <ProgramContext.Provider value={programObj}>
        <div className="min-w-screen flex h-screen flex-col items-stretch overflow-hidden bg-ddark">
          <Outlet />
        </div>
      </ProgramContext.Provider>
    </main>
  );
}
