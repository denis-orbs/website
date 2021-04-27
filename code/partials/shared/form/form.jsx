import React from "react";
import Loader from "../loader";
import FormInput from "./form-input";

const Form = (props) => {
  const { data, success, subTitle, submit, title, customClassName } = props;
  const formClassName = customClassName ? `${customClassName} form` : "form";
  return (
    <form className={formClassName}>
      <h3 className="form-title">{title}</h3>
      <div className="form-content flex-column">
        {success}

        <h4 className="form-sub-title">{subTitle}</h4>
        <div className="form-inputs flex-between">
          {data &&
            data.map((input, index) => {
              const {
                name,
                placeholder,
                className,
                error,
                type,
                isRequired,
                validationText,
              } = input;
              return (
                <FormInput
                  key={index}
                  isRequired={isRequired}
                  validationText={validationText}
                  name={name}
                  type={type}
                  placeholder={placeholder}
                  className={className}
                  error={error}
                />
              );
            })}
        </div>

        <div className="form-submit-container">
          <input type="submit" value={submit} className="form-submit" />
          <Loader />
        </div>
      </div>
    </form>
  );
};

export default Form;
