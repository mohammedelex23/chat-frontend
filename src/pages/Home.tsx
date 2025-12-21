import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { Outlet } from "react-router";

export function Home() {


  return (
    <div
      className="fixed overflow-auto top-0 left-0
        w-full h-full bg-primary p-3
         "
    >
      <div className="text-center">
        <div
          className="text-white m-auto justify-center flex 
                 gap-2"
        >
          <FontAwesomeIcon size={"2x"} icon={faMessage} />
          <h2 className="mb-1 font-medium text-2xl">Chat</h2>
        </div>
        <p className="text-lightText ">
          A simple chat app with React and Tailwindcss
        </p>
      </div>
        <Outlet />
    </div>
  );
}
