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
          </div>
          <h3>
            Elevate your HR <span className="loop">Experience</span> !
          </h3>

          <div className="hr-image"></div>
        </div>
        <div className="register__form">
          {toggle ? <SignUp /> : <LogIn />}
          <div className="button-controll">
            {toggle ? (
              <>
                <h6>
                  Already have an account?{" "}
                  <span
                    className="form-switch"
                    onClick={() => handleToggle(false)}
                  >
                    Log In
                  </span>
                </h6>
                {/* <button
                  className="form-switch-btn"
                  onClick={() => handleToggle(false)}
                >
                  Log In
                </button> */}
              </>
            ) : (
              <>
                <h6>
                  Don&apos;t have an account yet?{" "}
                  <span
                    className="form-switch"
                    onClick={() => handleToggle(true)}
                  >
                    Sign Up
                  </span>
                </h6>
                {/* <button
                  className="form-switch-btn"
                  onClick={() => handleToggle(true)}
                >
                  Sign Up
                </button> */}
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
