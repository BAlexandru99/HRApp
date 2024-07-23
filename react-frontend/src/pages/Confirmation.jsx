import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Confirmation = () => {
  const { firstName, lastName, email } = useSelector((state) => state.user);
  const navigate = useNavigate();

  setTimeout(() => {
    navigate("/");
  }, 6000);

  return (
    <div className="confirmation">
      <div className="confirmation__content">
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

export default Confirmation;
