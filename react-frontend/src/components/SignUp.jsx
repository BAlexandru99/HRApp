import { useState } from "react";
import { useDispatch } from "react-redux";
import { userEmail } from "../slices/userSlice";

const SignUp = () => {
  // const userEmail = useSelector((state) => state.user.value);
  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    let isValid = true;
    let newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is not valid";
      isValid = false;
    }

    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (validateForm()) {
      // Dispatch the userEmail action
      dispatch(userEmail(formData.email));
      // Form submission logic here (e.g., calling an API)
      console.log("Form is valid. Submitting...", formData);
    } else {
      console.error("Form validation failed.");
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="sign-up">
      <h2 className="title">Sign Up</h2>

      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && (
              <span className="error">{errors.password}</span>
            )}
          </div>

          <button className="submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
