import { useForm, FormProvider } from "react-hook-form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import InputGroup from "./InputGroup";
import BtnLoading from "../BtnLoading";

const LogIn = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { setError } = methods; // Destructure setError from methods
  const [btnLoading, setBtnLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = async (data) => {
    setBtnLoading(true);
    setIsDisabled(true);

    try {
      const response = await axios.post("/authenticate", {
        username: data.username,
        password: data.password,
      });
      const token = response.headers["authorization"];
      localStorage.setItem("token", token);
      console.log("Login successful", token);
      navigate("/dashboard");
    } catch (error) {
      if (error.response) {
        const message = error.response.data || "An error occurred";
        if (error.response.status === 401) {
          setError("username", {
            type: "manual",
            message: message,
          });
        } else if (error.response.status === 403) {
          setError("username", {
            type: "manual",
            message: message,
          });
        } else if (error.response.status === 404) {
          setError("username", {
            type: "manual",
            message: "Account not found",
          });
        } else {
          setError("username", {
            type: "manual",
            message: "An error occurred",
          });
        }
      } else {
        setError("username", {
          type: "manual",
          message: "An unexpected error occurred",
        });
      }
      console.error("Login failed", error);
    } finally {
      setBtnLoading(false);
      setIsDisabled(false);
    }
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
            disabled={isDisabled}
            className="submit flex-row center"
            type="submit"
          >
            Log In
            {btnLoading ? <BtnLoading /> : ""}
          </button>
        </form>
        <h4 className="forgot-password-section">
          Forgot Password?
          <Link to="/forgot-password">Click here</Link>
        </h4>
      </div>
    </FormProvider>
  );
};

export default LogIn;
