import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import AppHeader from "../ui/AppHeader";

function AppLayout() {
  return (
    <div className="grid min-h-screen grid-cols-[260px_1fr] grid-rows-[100px_1fr]">
      <Sidebar />
      <AppHeader />
      <div className="px-12">
        <Outlet />
      </div>
    </div>
  );
}

export default AppLayout;
