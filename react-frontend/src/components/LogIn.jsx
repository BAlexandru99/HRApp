import { useForm } from "react-hook-form";
import axios from 'axios';

const LogIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await axios.post('/authenticate', {
        username: data.username,
        password: data.password
      });
      const token = response.headers['authorization'];
      localStorage.setItem('token', token);
      console.log('Login successful', token);
    } catch (error) {
      console.error('Login failed', error);
    }
  };

  return (
    <div className="log-in">
      <h3 className="title">Log In</h3>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-group">
          <label className="floating-label" htmlFor="email">Email:</label>
          <input
            className="input-field"
            type="email"
            id="email"
            {...register("username", {
              required: "Email is required",
              pattern: {
                value: /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.username && (
            <span className="error-msg">{errors.username.message}</span>
          )}
        </div>
        <div className="input-group">
          <label className="floating-label" htmlFor="password">Password:</label>
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
        <button className="submit" type="submit">Submit</button>
      </form>
    </div>
  );
};

export default LogIn;
