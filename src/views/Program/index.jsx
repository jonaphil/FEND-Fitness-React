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
import { Suspense } from "react";
import { Outlet, Await } from "react-router-dom";
import getProgramStats from "@utils/helpers/getProgramStats";
import LoadingPage from "@views/StatusPages/Loading";
import ErrorPage from "@views/StatusPages/Error";
import { ProgramContext } from "@contexts/Context";
import { useLoaderData } from "react-router-dom";
export default function Program() {
    var data = useLoaderData();
    return (<main className="bg-ddark">
      <Suspense fallback={<LoadingPage />}>
        <Await resolve={data.promise} errorElement={ErrorPage}>
          {function (promise) {
            var _a, _b;
            return (<ProgramContext.Provider value={__assign(__assign({}, (_a = promise === null || promise === void 0 ? void 0 : promise.data) === null || _a === void 0 ? void 0 : _a.programs[0]), { stats: getProgramStats((_b = promise === null || promise === void 0 ? void 0 : promise.data) === null || _b === void 0 ? void 0 : _b.programs[0].workoutsWithDay) })}>
              <div className="min-w-screen flex h-screen flex-col items-stretch overflow-scroll bg-ddark">
                <Outlet />
              </div>
            </ProgramContext.Provider>);
        }}
        </Await>
      </Suspense>
    </main>);
}
