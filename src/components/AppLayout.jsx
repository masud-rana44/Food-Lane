import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="text-4xl text-indigo-800 font-bold">
      AppLayout
      <Outlet />
    </div>
  );
};
