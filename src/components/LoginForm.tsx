import { faEye, faEyeSlash } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { SocialMediaButton } from "./SocialMediaButton";
import { faGoogle } from "@fortawesome/free-brands-svg-icons";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { useLoginForm } from "../hooks/useLoginForm";
import { ErrorComponent } from "./ErrorComponent";

export function Login() {
  const {
    values,
    errors,
    errorBorder,
    handleChange,
    toggleShowPassword,
    toggleRemember,
    handleSubmit,
  } = useLoginForm();
  return (
    <div className="bg-white py-4 px-8 rounded-2xl m-auto w-xs md:w-md">
      <form onSubmit={handleSubmit}>
        {/* title */}
        <div className="mb-5 text-center">
          <h1 className="m-0 p-0 font-medium text-headingText">
            Welcome Back!
          </h1>
          <p className="text-secondaryText -mt-3">
            Sign in to continue to Chat
          </p>
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
          <div className="flex justify-between mb-2">
            <label className="text-headingText" htmlFor="password">
              Password
            </label>
            <a className="text-secondaryText" href="#">
              Forgot password?
            </a>
          </div>
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
        {/* remember me */}
        <div className="flex gap-2 mb-4">
          <input
            id="remember"
            onClick={toggleRemember}
            className="w-4 h-4 border-gray-300 rounded-sm checked:bg-primary checked:border-primary"
            type="checkbox"
            name="remember"
          />
          <label
            className="text-headingText font-medium text-xs"
            htmlFor="remember"
          >
            Remember me
          </label>
        </div>
        {/* login button */}
        <button className="form-btn ">Log In</button>
        {/* sign in with divider */}
        <div className="my-5 flex gap-0 justify-between items-center">
          <hr className="flex-1 text-gray-300" />
          <span className="mx-2 text-headingText font-medium">
            Sign in using
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
          Don't have an account ?{" "}
          <a className="text-primary underline" href="#">
            Register
          </a>
        </p>
      </form>
    </div>
  );
}
