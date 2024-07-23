import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Confirmation from "../pages/Confirmation";
import TestPage from "../pages/Confirmation";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/test" element={<TestPage />} />
        </Route>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
