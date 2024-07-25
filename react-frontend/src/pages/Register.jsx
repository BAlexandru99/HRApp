import { useState } from "react";
import SignUp from "../components/Form-Components/SignUp";
import LogIn from "../components/Form-Components/LogIn";
import TypewriterComponent from "../components/Form-Components/TypewriterComponent";

const Register = () => {
  const [toggle, setToggle] = useState(false);
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
            Join forward-thinking HR professionals and streamline your HR tasks
            with our intuitive platform. From recruitment to performance
            reviews, simplify processes and empower your team to focus on what
            truly matters.
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
      <footer>
        <div className="social-media">
          <a href="#" target="_blank" className="social-icon"></a>
          <a href="#" target="_blank" className="social-icon"></a>
          <a href="#" target="_blank" className="social-icon"></a>
          <a href="#" target="_blank" className="social-icon"></a>
        </div>
        <p>Copyright &copy; 2024 HR-Station</p>
      </footer>
    </div>
  );
};

export default Register;
