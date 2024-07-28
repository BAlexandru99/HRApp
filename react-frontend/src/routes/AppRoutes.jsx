import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ErrorPage } from "../pages/ErrorPage";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Confirmation from "../pages/Confirmation";
import Dashboard from "../pages/Dashboard";
import Candidates from "../pages/Candidates";
import Jobs from "../pages/Jobs";
import { Verified } from "../pages/Verified";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Layout />}>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/jobs" element={<Jobs />} />
          <Route path="/candidates" element={<Candidates />} />
        </Route>
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
