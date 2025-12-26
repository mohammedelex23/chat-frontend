import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConversationsList } from "./ConversationsList";

export function Conversations() {
  return (
    <div className="h-[calc(100%-40px)]">
      {/* title */}
      <h1>Chats</h1>
      {/* search box */}
      <div className="bg-gray-300 flex cursor-pointer items-center">
        <input
          type="text"
          className="outline-none px-3 py-2 w-full font-light"
          placeholder="Search here.."
        />
        <button className="cursor-pointer">
          <FontAwesomeIcon icon={faSearch} className="px-3 py-2" />
        </button>
      </div>
      {/* conversations list */}
      <ConversationsList />
    </div>
  );
}
