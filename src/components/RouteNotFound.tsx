import { Link } from "react-router";

export function RouteNotFound() {
  
  return (
    <div className="bg-primary absolute top-0 left-0 h-full w-full">
    <div className="bg-white py-6 mt-5 px-8 rounded-2xl m-auto w-xs md:w-md">
      <h1 className="text-center ">Route Not Found 404!</h1>
      <p>the route you are looking for is not available</p>
      <p>return to <Link className="link" to="/">home</Link></p>
    </div></div>
  );
}
