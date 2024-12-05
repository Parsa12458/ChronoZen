import { Outlet } from "react-router-dom";
import Sidebar from "../features/dashboard/Sidebar";
import AppHeader from "../ui/AppHeader";

function AppLayout() {
  return (
    // TODO: fix the grid row and app header
    <div className="grid min-h-screen grid-cols-[260px_1fr]">
      <Sidebar />
      <AppHeader />
      <Outlet />
    </div>
  );
}

export default AppLayout;
