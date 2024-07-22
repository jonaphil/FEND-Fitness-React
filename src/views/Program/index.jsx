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
import { Outlet, Await, useLoaderData } from "react-router-dom";
import { useReadQuery } from "@apollo/client";
import getProgramStats from "@utils/helpers/getProgramStats";
import LoadingPage from "@views/StatusPages/Loading";
import ErrorPage from "@views/StatusPages/Error";
import { ProgramContext } from "@contexts/Context";
export default function Program() {
    var queryRefPromise = useLoaderData().queryRefPromise;
    return (<main className="bg-ddark">
      <Suspense fallback={<LoadingPage />}>
        <Await resolve={queryRefPromise} errorElement={ErrorPage}>
          {function (queryRef) { return (<ProgramContextResolved queryRef={queryRef}>
              <Outlet />
            </ProgramContextResolved>); }}
        </Await>
      </Suspense>
    </main>);
}
function ProgramContextResolved(_a) {
    var queryRef = _a.queryRef, children = _a.children;
    var data = useReadQuery(queryRef).data;
    return (<>
      <ProgramContext.Provider value={__assign(__assign({}, data.programs[0]), { stats: getProgramStats(data.programs[0].workoutsWithDay) })}>
        <div className="min-w-screen flex h-screen flex-col items-stretch overflow-scroll bg-ddark">
          {children}
        </div>
      </ProgramContext.Provider>
    </>);
}
