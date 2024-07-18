import { useState } from "react";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

const Register = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (newToggle) => {
    setToggle(newToggle);
  };

  return (
    <div className="main">
      <div className="register">
        <div className="register__form">{toggle ? <SignUp /> : <LogIn />}</div>
        <div className="register__image">
          <div className="button-controll">
            {toggle ? (
              <>
                <h4>Already have an account?</h4>
                <button onClick={() => handleToggle(false)}>Log In</button>
              </>
            ) : (
              <>
                <h4>Don&apos;t have an account yet?</h4>
                <button onClick={() => handleToggle(true)}>Sign Up</button>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
