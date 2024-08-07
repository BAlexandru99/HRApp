import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { Link } from "react-router-dom";
import BtnLoading from "../components/BtnLoading";
import InputGroup from "../components/Form-Components/InputGroup";

export const ForgotPassword = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const [btnLoading, setBtnLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = (data) => {
    console.log(data);
    setBtnLoading(true);
    setIsDisabled(true);
    setTimeout(() => navigate("/"), 1500);
  };

  return (
    <div className="forgot-password middle-page">
      <div className="forgot-password__content flex-col">
        <h1>Forgot your password?</h1>
        <h2>
          Enter your email address and corresponding username <br /> and we will
          send you a link to reset your password.
        </h2>
        <h3>Follow the instructions in the email to reset your password!</h3>
        <FormProvider {...methods}>
          <form onSubmit={methods.handleSubmit(onSubmit)} className="flex-col">
            <InputGroup
              label="First Name"
              id="firstName"
              validation={{ required: "First name is required" }}
            />
            <InputGroup
              label="Email Address"
              id="email"
              type="email"
              validation={{
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              }}
            />
            <button
              disabled={isDisabled ? true : false}
              className="submit flex-row center"
              type="submit"
            >
              {btnLoading ? <BtnLoading /> : ""}
              Submit
            </button>
          </form>
        </FormProvider>
        <h4 className="forgot-password-section">
          Back to log in?
          <Link to="/">Click here</Link>
        </h4>
      </div>
    </div>
  );
};
