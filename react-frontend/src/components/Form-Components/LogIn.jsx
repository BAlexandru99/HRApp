import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputGroup from "./InputGroup";
import BtnLoading from "../BtnLoading";

const LogIn = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const [btnLoading, setBtnLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = async (data) => {
    try {
      const response = await axios.post("/authenticate", {
        username: data.username,
        password: data.password,
      });
      const token = response.headers["authorization"];
      localStorage.setItem("token", token);
      console.log("Login successful", token);
    } catch (error) {
      console.error("Login failed", error);
    }
    setBtnLoading(true);
    setIsDisabled(true);
    setTimeout(() => navigate("/dashboard"), 1500);
  };

  return (
    <FormProvider {...methods}>
      <div className="log-in">
        <form onSubmit={methods.handleSubmit(onSubmit)}>
          <h3 className="title">Log In</h3>
          <InputGroup
            label="Email"
            id="username"
            type="email"
            validation={{
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email address",
              },
            }}
          />
          <InputGroup
            label="Password"
            id="password"
            type="password"
            validation={{ required: "Password is required" }}
          />
          <button
            disabled={isDisabled ? true : false}
            className="submit flex-row center"
            type="submit"
          >
            {btnLoading ? <BtnLoading /> : ""}
            Log In
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default LogIn;
