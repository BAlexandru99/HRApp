import { useDispatch } from "react-redux";
import { userEmail } from "../slices/userSlice";
import { useForm } from "react-hook-form";

const SignUp = () => {
  // const userEmail = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  // Dispatch the userEmail action

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => {
    console.log(data);
    dispatch(userEmail(data.email));
  };

  return (
    <>
      <h3>Create an account</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label htmlFor="firstName" className="floating-label">
            First Name
          </label>
          <input
            className="input-field"
            placeholder=" "
            type="text"
            id="firstName"
            {...register("firstName", { required: "First Name is required" })}
          />
          {errors.firstName && (
            <span className="error-msg">{errors.firstName.message}</span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="lastName" className="floating-label">
            Last Name
          </label>
          <input
            className="input-field"
            placeholder=" "
            type="text"
            id="lastName"
            {...register("lastName", { required: "Last Name is required" })}
          />
          {errors.lastName && (
            <span className="error-msg">{errors.lastName.message}</span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="email" className="floating-label">
            Email
          </label>
          <input
            className="input-field"
            placeholder=" "
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
          <label htmlFor="phoneNumber" className="floating-label">
            Phone
          </label>
          <input
            className="input-field"
            placeholder=" "
            type="tel"
            id="phoneNumber"
            {...register("phoneNumber", {
              required: "Phone number is required",
            })}
          />
          {errors.phoneNumber && (
            <span className="error-msg">{errors.phoneNumber.message}</span>
          )}
        </div>

        <div className="input-group">
          <label htmlFor="password" className="floating-label">
            Password
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
    </>
  );
};

export default SignUp;
