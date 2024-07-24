import { useState } from "react";
import SignUp from "../components/Form-Components/SignUp";
import LogIn from "../components/Form-Components/LogIn";
import TypewriterComponent from "../components/Form-Components/TypewriterComponent";

const Register = () => {
  const [toggle, setToggle] = useState(true);
  const [animationClass, setAnimationClass] = useState("fade-enter");

  const handleToggle = (newToggle) => {
    setAnimationClass("fade-exit"); // Trigger exit animation
    setTimeout(() => {
      setToggle(newToggle);
      setAnimationClass("fade-enter"); // Trigger enter animation
    }, 500); // Match the duration of the exit animation
  };

  return (
    <div className="register-wrapper">
      <div className="register">
        <div className="register__image">
          <div className="logo-section">
            <div className="logo-section__img"></div>
          </div>
          <TypewriterComponent />
          <p>
            Join a community of forward-thinking HR professionals and experience
            a seamless, efficient, and intuitive way to manage your HR tasks.
            From recruitment to performance reviews, our platform simplifies
            every step of your HR processes, empowering your team to focus on
            what truly matters.
          </p>
          <div className="hr-image"></div>
        </div>
        <div className={`register__form ${animationClass}`}>
          {toggle ? <SignUp /> : <LogIn />}
          <div className="button-controll">
            {toggle ? (
              <>
                <p>
                  Already have an account?{" "}
                  <span
                    className="form-switch"
                    onClick={() => handleToggle(false)}
                  >
                    Log In
                  </span>
                </p>
              </>
            ) : (
              <>
                <p>
                  Don&apos;t have an account yet?{" "}
                  <span
                    className="form-switch"
                    onClick={() => handleToggle(true)}
                  >
                    Sign Up
                  </span>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
