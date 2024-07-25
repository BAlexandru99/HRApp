import { useForm, FormProvider } from "react-hook-form";
import axios from "axios";
import InputGroup from "./InputGroup";

const LogIn = () => {
  const methods = useForm();

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
          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </FormProvider>
  );
};

export default LogIn;
