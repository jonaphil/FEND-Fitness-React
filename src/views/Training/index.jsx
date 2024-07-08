import { Outlet } from "react-router-dom";
export default function Program() {
    return (<main className="min-w-screen flex h-screen flex-col items-stretch overflow-hidden bg-ddark">
      <Outlet />
    </main>);
}
