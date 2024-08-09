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
import { ForgotPasswordConfirmation } from "../middlePage/ForgotPasswordConfirmation";
import { ExpiredVerification } from "../middlePage/ExpiredVerification";
import { ExpiredPasswordReset } from "../middlePage/ExpiredPasswordReset";
import { PasswordResetForm } from "../middlePage/PasswordResetForm";
import { ResetPasswordConfirmation } from "../middlePage/ResetPasswordConfirmation";

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

        {/* Middle pages */}
        <Route path="/confirmation" element={<Confirmation />} />
        <Route path="/verified" element={<Verified />} />
        <Route path="/password-reset-form" element={<PasswordResetForm />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route
          path="/reset-password-confirmation"
          element={<ResetPasswordConfirmation />}
        />
        <Route
          path="/forgot-password-confirmation"
          element={<ForgotPasswordConfirmation />}
        />
        <Route path="/expired-verification" element={<ExpiredVerification />} />
        <Route
          path="/expired-password-reset"
          element={<ExpiredPasswordReset />}
        />
        <Route path="*" element={<ErrorPage />} />
        {/* End of middle pages */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;
