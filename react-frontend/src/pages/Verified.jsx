import { Link } from "react-router-dom";

export const Verified = () => {
  return (
    <div className="verified middle-page">
      <div className="verified__content">
        <h1>Congratulations!</h1>
        <h2>You have successfully verified your account.</h2>
        <h2>
          You can now <Link to="/">Log In</Link>.
        </h2>
      </div>
    </div>
  );
};
