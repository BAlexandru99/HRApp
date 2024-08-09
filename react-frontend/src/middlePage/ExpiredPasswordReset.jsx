import { useNavigate } from "react-router-dom";

export const ExpiredPasswordReset = () => {
  const navigation = useNavigate();

  setTimeout(() => {
    navigation("/");
  }, 6000);

  return (
    <div className="expire-password-reset middle-page">
      <div className="expired-password-reset__content flex-col">
        <h1>Ooops!</h1>
        <h2>Your password reset link has expired.</h2>
        <h3>You will be redirected shortly!</h3>
      </div>
    </div>
  );
};
