import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMessage, faUser } from "@fortawesome/free-regular-svg-icons";
import { Link, Outlet, useLocation } from "react-router";
import { faGear, faLock, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export function Chats() {
  const location = useLocation();
  const [showProfileOptions, setShowProfileOptions] = useState(false);
  const toggleProfileOptions =
    (from: string = "profile") =>
    (e: any) => {
     e.stopPropagation()
      if (from === "profile") {
        setShowProfileOptions(!showProfileOptions);
      } else {
        setShowProfileOptions(false);
      }
    };
  return (
    <div
      onClick={toggleProfileOptions("chats")}
      className="fixed overflow-auto top-0 left-0
        w-full h-full bg-primary
         "
    >
      <div
        className="fixed top-0 left-0 w-full
      h-screen bg-white p-6 m-auto md:w-3/6 md:relative "
      >
        <Outlet />
        {/* bottom nav */}
        <ul
          className="flex justify-evenly items-center fixed
         bottom-0 left-0 w-full px-3 py-2 bg-gray-800 md:absolute"
        >
          <li>
            <div
              className={`w-5 h-1
             absolute top-0 ml-0.5 mt-0.5
             ${
               location.pathname == "/conversations"
                 ? "bg-green-400"
                 : "bg-gray-800"
             }
             `}
            ></div>
            <Link to="/conversations">
              <FontAwesomeIcon
                className={`icon-size ${
                  location.pathname == "/conversations"
                    ? "text-green-400"
                    : "icon-color"
                }`}
                icon={faMessage}
              />
            </Link>
          </li>
          <li>
            <div
              className={`w-5 h-1
             absolute top-0 ml-0.5 mt-0.5
             ${
               location.pathname == "/conversations/settings"
                 ? "bg-green-400"
                 : "bg-gray-800"
             }
             `}
            ></div>

            <Link to="/conversations/settings">
              <FontAwesomeIcon
                className={`icon-size ${
                  location.pathname == "/conversations/settings"
                    ? "text-green-400"
                    : "icon-color"
                }`}
                icon={faGear}
              />
            </Link>
          </li>
          <li>
            {/* profile options */}
            {showProfileOptions && (
              <ul
                className="absolute text-sm p-3 w-44 bottom-11
             right-4 bg-white shadow  rounded-md mb-1"
              >
                <li className="cursor-pointer flex justify-between items-center mb-2">
                  <span>Profile</span>
                  <FontAwesomeIcon icon={faUser} />
                </li>
                <li className="cursor-pointer flex justify-between items-center">
                  <span>Change Password</span>
                  <FontAwesomeIcon icon={faLock} />
                </li>
                <li className="cursor-pointer flex justify-between items-center mt-4">
                  <span>Log out</span>
                  <FontAwesomeIcon icon={faSignOut} />
                </li>
              </ul>
            )}
            <div
              onClick={toggleProfileOptions()}
              className="cursor-pointer w-9 border-3 border-white rounded-full"
            >
              <img
                className="rounded-full"
                src="/src/assets/profile.JPG"
                alt="prfile"
              />
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
