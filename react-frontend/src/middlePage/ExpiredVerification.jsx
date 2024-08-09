import { useNavigate } from "react-router-dom";

export const ExpiredVerification = () => {
  const navigate = useNavigate();
  setTimeout(() => {
    navigate("/");
  }, 6000);
  return (
    <div className="expired-verification middle-page">
      <div className="expired-verification__content flex-col">
        <h1>Ooops!</h1>
        <h2>
          Your verification link has expired. Please request a new one
          <br />
          by submitting a new registration form.
        </h2>
        <h3>You will be redirected shortly!</h3>
      </div>
    </div>
  );
};
