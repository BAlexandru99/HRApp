import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import TestPage from "../pages/TestPage";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/test" element={<TestPage />} />
        </Route>
        <Route index element={<Home />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
