import { useState, type ChangeEvent, type FormEvent } from "react";
import { isEmpty, validateEmail, validatePassword } from "../utils/validators";

export function useLoginForm() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    remember: false,
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    emailError: "",
    passwordError: "",
  });

  const validateFormFields = () => {
    let errorMessage: string = "";
    var errorsObj = { ...errors };

    let isValidForm = true;

    for (let key in errors) {
      if (key == "emailError") {
        errorMessage = validateEmail(values.email);
        if (errorMessage) {
          isValidForm = false;
        }
        errorsObj["emailError"] = errorMessage;
      } else {
        errorMessage = validatePassword(values.password);
        if (errorMessage) {
          isValidForm = false;
        }
        errorsObj["passwordError"] = errorMessage;
      }
    }

   
    setErrors({
      ...errors,
      ...errorsObj,
    });
    return isValidForm;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!validateFormFields()) return;
    alert(`form is valid ${JSON.stringify(values)}`);
  };

  const handleChange = (name: string) => (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;

    switch (name) {
      case "email":
        setErrors({
          ...errors,
          emailError: validateEmail(value),
        });
        break;
      case "password":
        let errorMessage = validatePassword(value);
        console.log(errorMessage);

        setErrors({
          ...errors,
          passwordError: errorMessage,
        });
        break;
      default:
        break;
    }

    setValues({
      ...values,
      [name]: e.target.value,
    });
  };

  const toggleShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };
  const toggleRemember = () => {
    setValues({
      ...values,
      remember: !values.remember,
    });
  };

  const errorBorder = (error: string) => {
    if (error) return "1.5px solid red";
  };

  return {
    values,
    errors,
    toggleShowPassword,
    toggleRemember,
    handleChange,
    errorBorder,
    handleSubmit,
  };
}
