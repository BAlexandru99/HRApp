import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "../pages/Layout";
import Home from "../pages/Home";
import Dashboard from "../pages/Dashboard";
import Candidates from "../pages/Candidates";
import Jobs from "../pages/Jobs";
import { ErrorPage } from "../middlePage/ErrorPage";
import { Confirmation } from "../middlePage/Confirmation";
import { Verified } from "../middlePage/Verified";
import { ForgotPassword } from "../middlePage/ForgotPassword";

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
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;
