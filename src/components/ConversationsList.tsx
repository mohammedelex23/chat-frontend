import { useNavigate } from "react-router";
import { Status } from "../enums";

export function ConversationsList() {
  return (
    <ul
      className="
    mt-5
    overflow-auto
    h-[85%]
    [scrollbar-width:none]
    md:h-[80%]
    md:[scrollbar-width:auto]
    "
    >
      <ConversationsListItem
      id="4"
      status={Status.OFFLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
      <ConversationsListItem
      id="4"
      status={Status.ONLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
      <ConversationsListItem
      id="4"
      status={Status.OFFLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
      <ConversationsListItem
      id="4"
      status={Status.OFFLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
      <ConversationsListItem
      id="4"
      status={Status.ONLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
      <ConversationsListItem
      id="4"
      status={Status.ONLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
      <ConversationsListItem
      id="4"
      status={Status.ONLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
      <ConversationsListItem
      id="4"
      status={Status.ONLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
      <ConversationsListItem
      id="4"
      status={Status.ONLINE}
        unreadMessages={4}
        lastMessage="how are you"
        name={"Mohammed Ismail"}
      />
    </ul>
  );
}

function ConversationsListItem(props: {
  id: string,
  status: Status,
  name: string;
  lastMessage: string;
  unreadMessages: number;
}) {
  const Navigate = useNavigate()
  return (
    <li
    onClick={() => Navigate(`/conversations/${props.id}`)}
      className="
     select-none cursor-pointer
     p-2 hover:bg-gray-300
     flex items-center
     justify-between"
    >
      <div className="flex items-center gap-3">
        {/* image avatar */}
        <div className="relative">
          <div className="w-10 rounded-full">
            <img
              className="rounded-full"
              src="/src/assets/profile.JPG"
              alt="avatar"
            />
          </div>
          <OnlineIndicator status={props.status} />
        </div>
        <div className="flex flex-col">
          {/* name */}
          <span className="text-sm">{props.name}</span>
          <span
            className="text-sm
         text-gray-600
         truncate w-40
         "
          >
            {props.lastMessage}
          </span>
        </div>
      </div>
      <div
        className="
        w-6 h-6 
        rounded-full bg-green-500
      text-white
        flex items-center
        justify-center
        text-xs
      "
      >
        {props.unreadMessages > 99
          ? `${props.unreadMessages.toString().slice(0, 1)}..`
          : props.unreadMessages}
      </div>
    </li>
  );
}

function OnlineIndicator(props: {status: Status}) {
  return (
    <div
      className={`
    absolute bottom-0 right-0
    border-2
  border-white 
    w-3 h-3 rounded-full
  ${props.status == Status.ONLINE ? "bg-green-500" : "bg-orange-500"}
    `}
    ></div>
  );
}
