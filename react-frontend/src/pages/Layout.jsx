import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const Layout = () => {
  return (
    <div className="layout">
      <Sidebar />
      <Outlet />
      {/* <h3>Footer</h3> */}
    </div>
  );
};

export default Layout;
