import { FC } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";

export const Layout: FC = () => {
  return (
    <div className="flex flex-row">
      <p className="bg-red-500">hi</p>
      
      <Sidebar />
      <Outlet />
    </div>
  );
};
