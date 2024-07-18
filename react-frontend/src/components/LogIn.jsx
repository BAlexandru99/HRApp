import { useForm } from "react-hook-form";

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);

  return (
    <div className="log-in">
      <h3 className="title">Log In</h3>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label className="floating-label" htmlFor="email">
            Email:
          </label>
          <input
            className="input-field"
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && (
            <span className="error-msg">{errors.email.message}</span>
          )}
        </div>

        <div className="input-group">
          <label className="floating-label" htmlFor="password">
            Password:
          </label>
          <input
            className="input-field"
            type="password"
            autoComplete="on"
            id="password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && (
            <span className="error-msg">{errors.password.message}</span>
          )}
        </div>

        <button className="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default LogIn;
