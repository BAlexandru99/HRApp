import { useForm, FormProvider } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useDispatch } from "react-redux";
import {
  setFirstName,
  setLastName,
  setEmail,
  setPhone,
  setPassword,
} from "../../slices/userSlice";

import InputGroup from "./InputGroup";

const SignUp = () => {
  const methods = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    // Dispatch actions to update the Redux store
    dispatch(setFirstName(data.firstName));
    dispatch(setLastName(data.lastName));
    dispatch(setEmail(data.email));
    dispatch(setPhone(data.phoneNumber));
    dispatch(setPassword(data.password));

    // Axios functionality
    try {
      const response = await axios.post("/register", {
        firstName: data.firstName,
        lastName: data.lastName,
        email: data.email,
        phoneNumber: data.phoneNumber,
        password: data.password,
      });
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration failed", error);
    }

    // Navigate to confirmation page
    // Remove this line for testing purposes
    navigate("/confirmation");
  };

  return (
    <FormProvider {...methods}>
      <h3 className="title">Sign Up</h3>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <InputGroup
          label="First Name"
          id="firstName"
          validation={{ required: "First Name is required" }}
        />
        <InputGroup
          label="Last Name"
          id="lastName"
          validation={{ required: "Last Name is required" }}
        />
        <InputGroup
          label="Email"
          id="email"
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
          label="Phone"
          id="phoneNumber"
          type="tel"
          validation={{ required: "Phone number is required" }}
        />
        <InputGroup
          label="Password"
          id="password"
          type="password"
          validation={{ required: "Password is required" }}
        />
        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </FormProvider>
  );
};

export default SignUp;
