import { useNavigate } from "react-router-dom";

export const ResetPasswordConfirmation = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 6000);
  return (
    <div className="reset-password-confirmation middle-page">
      <div className="reset-password-confirmation__content flex-col">
        <h1>Congratulation!</h1>
        <h2>You have successfully reset your password.</h2>
        <h3>You will be redirected shortly!</h3>
      </div>
    </div>
  );
};
