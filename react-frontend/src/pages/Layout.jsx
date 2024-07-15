import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="layout">
      <h3>Navbar</h3>
      <Outlet />
      <h3>Footer</h3>
    </div>
  );
};

export default Layout;
