import { FC } from "react";
import { Outlet } from "react-router";
import { Sidebar } from "../components/Sidebar";
import { Header } from "../components/Header";

export const Layout: FC = () => {
  return (
    <div
      className="grid h-full"
      style={{
        gridTemplateColumns: "20em auto",
        gridTemplateRows: "4em auto",
      }}
    >
      <Header />
      <Sidebar />
      <div className="p-5">
        <Outlet />
      </div>
    </div>
  );
};
