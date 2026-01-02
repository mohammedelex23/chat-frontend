import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Direction } from "../enums";
import type { MessageType } from "../types";
import { faCheckDouble } from "@fortawesome/free-solid-svg-icons/faCheckDouble";

const CURRENT_USER = "Mohammed Ismail";

export function ConversationMessagesList(props: { name: string; messages: Array<MessageType> }) {
  return (
    <ul>
      {props.messages.map((message, index) => (
        <MessageItem
          key={index}
          message={message}
          direction={
            message.from == CURRENT_USER ? Direction.LEFT : Direction.RIGHT
          }
        />
      ))}
    </ul>
  );
}

function MessageItem(props: { message: MessageType; direction: Direction }) {
  const message = props.message;
  return (
    <li
      className={`text-gray-600 flex 
    ${props.direction == Direction.RIGHT && "flex-row-reverse"}
    gap-3 justify-start
    mb-4
    `}
    >
      <img
        className="w-7 h-7 
        rounded-full
       self-end
        "
        src="/src/assets/profile.JPG"
        alt=""
      />
      <div className="max-w-[40%]">
        <p
          className={`
            shadow
            ${props.direction == Direction.LEFT ? "bg-green-200" : "bg-white"} 
        p-2 w-fit 
        ${props.direction == Direction.LEFT ? "mr-auto" : "ml-auto"}
        text-gray-600 rounded-sm
        `}
        >
          {message.value}
        </p>

        <div
          className={`
        flex
        gap-5 items-center
        ${props.direction == Direction.RIGHT && "flex-row-reverse"}
        mt-1
         `}
        >
          <h2 className="text-sm">
            {CURRENT_USER == message.from ? "You" : message.from}
          </h2>
          <span className="text-xs">{message.time}</span>
        </div>
      </div>
      {message.from == CURRENT_USER && (
        <div className="self-end">
          <FontAwesomeIcon
            className={`${message.isRead ? "text-green-500" : "text-gray-400"}`}
            icon={faCheckDouble}
          />
        </div>
      )}
    </li>
  );
}
