import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Spinner from "@components/simple Components/Suspense/Spinner";
export default function Program() {
    return (<Suspense fallback={<div className="flex h-screen w-screen flex-col items-center justify-center">
          <Spinner />
        </div>}>
      <main className="min-w-screen flex h-screen flex-col items-stretch overflow-hidden bg-ddark">
        <Outlet />
      </main>
    </Suspense>);
}
