import { useState, type ChangeEvent, type FormEvent } from "react";
import { isEmpty, validateEmail, validatePassword } from "../utils/validators";
import { useNavigate } from "react-router";

export function useSignupForm() {

  const Navigate = useNavigate()

  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
    showPassword: false,
  });

  const [errors, setErrors] = useState({
    emailError: "",
    nameError: "",
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
      } else if (key == "passwordError") {
        errorMessage = validatePassword(values.password);
        if (errorMessage) {
          isValidForm = false;
        }
        errorsObj["passwordError"] = errorMessage;
      } else {
        let isEmptyName = isEmpty(values.name);

        if (isEmptyName) {
          isValidForm = false;
          errorsObj["nameError"] = "name is empty";
        } else {
          errorsObj["nameError"] = "";
        }
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
    Navigate("/register_completed")
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

        setErrors({
          ...errors,
          passwordError: errorMessage,
        });
        break;

      case "name":
        let isEmptyName = isEmpty(value);

        setErrors({
          ...errors,
          nameError: isEmptyName ? "name is empty" : "",
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

  const errorBorder = (error: string) => {
    if (error) return "1.5px solid red";
  };

  return {
    values,
    errors,
    toggleShowPassword,
    handleChange,
    errorBorder,
    handleSubmit,
  };
}
