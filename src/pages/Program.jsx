import { Outlet, useParams } from "react-router-dom";
import getProgramDetails from "../queries/getProgramDetails";
import { getProgramStats } from "./ProgramDetails";
import { LoadingPage } from "../components/StatusElements/Loading";
import Error from "../components/StatusElements/Error";
import { ProgramContext } from "../Context";

export default function Program() {
  const { programId } = useParams();

  const programQuery = getProgramDetails(programId);

  if (programQuery.loading) {
    return <LoadingPage />;
  }
  if (programQuery.error) {
    console.log(
      `An Error occured fetching the program data: ${programQuery.error.message}`
    );
    return <Error />;
  }

  const programObj = {
    ...programQuery?.data?.programs[0],
    stats: getProgramStats(programQuery?.data?.programs[0].workoutsWithDay),
  };
  return (
    <main className="bg-ddark">
      <ProgramContext.Provider value={programObj}>
        <div className="h-screen w-full bg-ddark">
          <Outlet />
        </div>
      </ProgramContext.Provider>
    </main>
  );
}
