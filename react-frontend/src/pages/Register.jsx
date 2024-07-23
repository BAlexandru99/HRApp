import { useState } from "react";
import SignUp from "../components/Form-Components/SignUp";
import LogIn from "../components/Form-Components/LogIn";

const Register = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (newToggle) => {
    setToggle(newToggle);
  };

  return (
    <div className="register-wrapper">
      <div className="register">
        <div className="register__image">
          <div className="logo-section">
            <div className="logo-section__img"></div>
            <div className="logo-section__title">HR-App</div>
          </div>
          <div className="button-controll">
            {toggle ? (
              <>
                <h4>Already have an account?</h4>
                <button
                  className="form-switch-btn"
                  onClick={() => handleToggle(false)}
                >
                  Log In
                </button>
              </>
            ) : (
              <>
                <h4>Don&apos;t have an account yet?</h4>
                <button
                  className="form-switch-btn"
                  onClick={() => handleToggle(true)}
                >
                  Sign Up
                </button>
              </>
            )}
          </div>
        </div>
        <div className="register__form">{toggle ? <SignUp /> : <LogIn />}</div>
      </div>
    </div>
  );
};

export default Register;
