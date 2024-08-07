import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const Confirmation = () => {
  const { firstName, lastName, email } = useSelector((state) => state.user);
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 6000);

  return (
    <div className="confirmation middle-page">
      <div className="confirmation__content flex-col">
        <h1>
          Thank you {firstName} {lastName}!
        </h1>
        <h2>You have successfully registered.</h2>
        <h3>Please check your email {email} for further instructions.</h3>
        <h4>You will be redirected shortly!</h4>
      </div>
    </div>
  );
};
