import { Link } from "react-router";

export function SignupComplete() {
  
  return (
    <div className="bg-white py-6 mt-5 px-8 rounded-2xl m-auto w-xs md:w-md">
      <h1 className="text-center ">Signup Completed!</h1>
      <p>please open your email and verify your account</p>
      <p className="mt-2">after that go to <Link className="text-primary underline" to="/">login</Link> page</p>
    </div>
  );
}
