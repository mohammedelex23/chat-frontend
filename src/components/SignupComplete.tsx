import { Link } from "react-router";

export function AlertComponent(props:{title: string, message:string}) {
  
  return (
    <div className="bg-white py-6 mt-5 px-8 rounded-2xl m-auto w-xs md:w-md">
      <h1 className="text-center ">{props.title}</h1>
      <p>{props.message}</p>
      <p className="mt-2">go to <Link className="link" to="/">login</Link> page</p>
    </div>
  );
}
