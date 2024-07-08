import { Outlet } from "react-router-dom";

export default function RouterRoot({}) {
  return (
    <div className="min-w-screen min-h-screen bg-ddark">
      <Outlet />
    </div>
  );
}
