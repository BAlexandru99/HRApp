import { useState } from "react";
import SignUp from "../components/SignUp";
import LogIn from "../components/LogIn";

const Register = () => {
  const [toggle, setToggle] = useState(true);

  const handleToggle = (newToggle) => {
    setToggle(newToggle);
  };

  return (
    <div className="register main">
      <div className="button-controll">
        <button
          className={toggle ? "active" : ""}
          onClick={() => handleToggle(true)}
        >
          Sign Up
        </button>
        /
        <button
          className={toggle ? "" : "active"}
          onClick={() => handleToggle(false)}
        >
          Log In
        </button>
      </div>
      {toggle ? <SignUp /> : <LogIn />}
    </div>
  );
};

export default Register;
