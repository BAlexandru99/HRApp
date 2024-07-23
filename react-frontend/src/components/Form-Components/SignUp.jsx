import { useForm, FormProvider } from "react-hook-form";
import InputGroup from "./InputGroup";

const SignUp = () => {
  const methods = useForm();

  const onSubmit = (data) => {
    console.log(data);
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
