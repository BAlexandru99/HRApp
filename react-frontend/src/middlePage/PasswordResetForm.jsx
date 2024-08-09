import { useState } from "react";
import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import InputGroup from "../components/Form-Components/InputGroup";
import BtnLoading from "../components/BtnLoading";

export const PasswordResetForm = () => {
  const navigate = useNavigate();
  const methods = useForm();
  const { handleSubmit, watch, setError } = methods;
  const [btnLoading, setBtnLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);

  const onSubmit = async (data) => {
    console.log(data);
    setBtnLoading(true);
    setIsDisabled(true);

    try {
      const params = new URLSearchParams();
      params.append("username", data.email);
      params.append("password", data.password);
      const response = await axios.post("/user/reset", params, {
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
      });
      console.log("Reset successful", response.data);
    } catch (error) {
      if (error.response && error.response.data) {
        if (
          error.response.data.error ===
          "Password cannot be the same as the old one"
        ) {
          setError("password", {
            type: "manual",
            message: "New password cannot be the same as the old password.",
          });
        } else {
          console.error("Reset failed", error.response.data);
        }
      } else {
        console.error("Reset failed", error.message);
      }
    } finally {
      setTimeout(() => navigate("/reset-password-confirmation"), 1500);
      setBtnLoading(false);
      setIsDisabled(false);
    }
  };

  const password = watch("password");

  return (
    <div className="password-reset-form middle-page">
      <div className="password-reset-form__content flex-col">
        <h1>Password Reset</h1>
        <h2>Please enter your new password</h2>
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)} className="flex-col">
            <InputGroup
              label="New password"
              id="password"
              type="password"
              validation={{
                required: "Please enter a new password",
              }}
            />
            <InputGroup
              label="Confirm new password"
              id="confirmPassword"
              type="password"
              validation={{
                required: "Please confirm your new password",
                validate: (value) =>
                  value === password || "Passwords do not match",
              }}
            />
            <button
              disabled={isDisabled}
              className="submit flex-row center"
              type="submit"
            >
              Submit
              {btnLoading ? <BtnLoading /> : ""}
            </button>
          </form>
        </FormProvider>
      </div>
    </div>
  );
};
