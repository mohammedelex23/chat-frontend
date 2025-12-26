import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaButton } from "./SocialMediaButton";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useSignupForm } from "../hooks/useSignupForm";
import { ErrorComponent } from "./ErrorComponent";
import { Link } from "react-router";

export function SignupForm() {
  const {
    values,
    errors,
    errorBorder,
    handleChange,
    toggleShowPassword,
    handleSubmit,
  } = useSignupForm();
  return (
    <div className="bg-white py-5 mt-3 px-8 rounded-2xl m-auto w-xs md:w-md">
      <form onSubmit={handleSubmit}>
        {/* title */}
        <div className="mb-3 text-center">
          <h1 className="font-medium text-headingText">
            Register!
          </h1>
          <p className="text-secondaryText -mt-3">
            Create new account to chat with friends
          </p>
        </div>
        {/* name */}
        <div className="form-group">
          <label className="mb-2 text-headingText" htmlFor="name">
            Name
          </label>
          <div className="flex flex-col">
            <input
              name="name"
              value={values.name}
              onChange={handleChange("name")}
              className="input"
              style={{
                border: errorBorder(errors.nameError),
              }}
              type="text"
              placeholder="Enter name"
            />
            {errors.nameError && (
              <ErrorComponent message={errors.nameError} />
            )}
          </div>
        </div>
        {/* email */}
        <div className="form-group">
          <label className="mb-2 text-headingText" htmlFor="email">
            Email
          </label>
          <div className="flex flex-col">
            <input
              name="email"
              value={values.email}
              onChange={handleChange("email")}
              className="input"
              style={{
                border: errorBorder(errors.emailError),
              }}
              type="text"
              placeholder="Enter email"
            />
            {errors.emailError && (
              <ErrorComponent message={errors.emailError} />
            )}
          </div>
        </div>
        {/* password */}
        <div className="form-group">
            <label className="mb-2 text-headingText" htmlFor="password">
              Password
            </label>
            
          <div className="flex flex-col">
            <div
              style={{
                border: errorBorder(errors.passwordError),
              }}
              className="flex justify-between items-center border rounded-md border-gray-300"
            >
              <input
                name="password"
                value={values.password}
                onChange={handleChange("password")}
                className="px-3 w-full text-sm
               text-headingText py-2 outline-none"
                type={values.showPassword ? "text" : "password"}
                placeholder="Enter password"
              />

              {values.showPassword ? (
                <FontAwesomeIcon
                  className="px-4"
                  onClick={() => toggleShowPassword()}
                  icon={faEyeSlash}
                />
              ) : (
                <FontAwesomeIcon
                  className="px-4"
                  onClick={() => toggleShowPassword()}
                  icon={faEye}
                />
              )}
            </div>
            {errors.passwordError && (
              <ErrorComponent message={errors.passwordError} />
            )}
          </div>
        </div>
       
        {/* signup button */}
        <button className="form-btn ">Signup</button>
        {/* sign in with divider */}
        <div className="my-5 flex gap-0 justify-between items-center">
          <hr className="flex-1 text-gray-300" />
          <span className="mx-2 text-headingText font-medium">
            Sign up using
          </span>
          <hr className="flex-1 text-gray-300" />
        </div>
        {/* social media buttons */}
        <div className="flex justify-center mb-5">
          {/* google */}
          <SocialMediaButton color="text-red-400" icon={faGoogle} />
          {/* twitter */}
          <SocialMediaButton color="text-black-200" icon={faX} />
        </div>
        {/* register */}
        <p className="text-center text-secondaryText">
          Already have an account ?{" "}
          <Link to="/" className="link">
            login
          </Link>
        </p>
      </form>
    </div>
  );
}
