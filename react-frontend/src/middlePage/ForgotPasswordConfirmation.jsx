import { useNavigate } from "react-router-dom";

export const ForgotPasswordConfirmation = () => {
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 6000);
  return (
    <div className="forgot-password-confirmation middle-page">
      <div className="forgot-password-confirmation__content flex-col">
        <h1>You have requested a password reset!</h1>
        <h2>Please check your email for further instructions.</h2>
        <h3>You will be redirected shortly!</h3>
      </div>
    </div>
  );
};
