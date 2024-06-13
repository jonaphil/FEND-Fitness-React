import { Outlet, useParams } from "react-router-dom";
import getProgramDetails from "../queries/getProgramDetails";
import { getProgramStats } from "./ProgramDetails";
import { LoadingPage } from "../components/StatusElements/Loading";
import { ErrorPage } from "../components/StatusElements/Error";
import { ProgramContext, ProgramType } from "../Context";
import { useLoaderData } from "../../node_modules/react-router-dom/dist/index";

export function Program(): React.JSX.Element {
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
        <div className="min-w-screen flex h-screen flex-col items-stretch justify-stretch overflow-hidden bg-ddark">
          <Outlet />
        </div>
      </ProgramContext.Provider>
    </main>
  );
}
