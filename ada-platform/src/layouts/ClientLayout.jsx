import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const ClientLayout = () => {
  return (
    <div style={{ display: "flex" }}>
      <Sidebar />
      <main style={{ flex: 1 }}>
        <Outlet />
      </main>
    </div>
  );
};

export default ClientLayout;
