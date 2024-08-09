import { useState, useEffect } from "react";
import { useFormContext } from "react-hook-form";
import PropTypes from "prop-types";

const InputGroup = ({ label, id, type = "text", validation = {} }) => {
  const [hasText, setHasText] = useState(false);
  const {
    register,
    formState: { errors },
    setValue,
    watch,
  } = useFormContext();
  const value = watch(id);

  useEffect(() => {
    setHasText(value !== "");
  }, [value]);

  return (
    <div className={`input-group ${hasText ? "has-text" : ""}`}>
      <label htmlFor={id} className="floating-label">
        {label}
      </label>
      <input
        {...register(id, validation)}
        className="input-field"
        placeholder=" "
        type={type}
        id={id}
        autoComplete="off"
        onChange={(e) => {
          setValue(id, e.target.value);
          setHasText(e.target.value !== "");
        }}
      />
      {errors[id] && <span className="error-msg">{errors[id]?.message}</span>}
    </div>
  );
};

InputGroup.propTypes = {
  label: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.string,
  validation: PropTypes.object,
};

export default InputGroup;
