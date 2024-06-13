var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
import { Outlet } from "react-router-dom";
import { getProgramStats } from "./ProgramDetails";
import { LoadingPage } from "../components/StatusElements/Loading";
import { ErrorPage } from "../components/StatusElements/Error";
import { ProgramContext } from "../Context";
import { useLoaderData } from "../../node_modules/react-router-dom/dist/index";
export function Program() {
    var _a, _b;
    var programQuery = useLoaderData();
    if (programQuery.loading) {
        return <LoadingPage />;
    }
    if (programQuery.error) {
        console.log("An Error occured fetching the program data: ".concat(programQuery.error.message));
        return <ErrorPage />;
    }
    var programObj = __assign(__assign({}, (_a = programQuery === null || programQuery === void 0 ? void 0 : programQuery.data) === null || _a === void 0 ? void 0 : _a.programs[0]), { stats: getProgramStats((_b = programQuery === null || programQuery === void 0 ? void 0 : programQuery.data) === null || _b === void 0 ? void 0 : _b.programs[0].workoutsWithDay) });
    return (<main className="bg-ddark">
      <ProgramContext.Provider value={programObj}>
        <div className="min-w-screen flex h-screen flex-col items-stretch justify-stretch overflow-hidden bg-ddark">
          <Outlet />
        </div>
      </ProgramContext.Provider>
    </main>);
}
