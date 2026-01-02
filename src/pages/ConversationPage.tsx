import { Conversation } from "../components/Conversation";
import { Status } from "../enums";

export function ConversationPage() {
  let messages = [
    {
      id: "1",
      value: "how are you doing",
      time: "11:22am",
      isRead: true,
    },
    {
      id: "1",
      value: "how are you doing",
      time: "11:22am",
      isRead: true,
    },
    {
      id: "1",
      value: "how are you doing",
      time: "11:22am",
      isRead: true,
    },
  ];
  return (
    <div className="bg-primary fixed top-0 left-0 w-full h-full ">
      <div className="w-full md:w-md m-auto bg-white h-full">
        <Conversation
          conversationId="1"
          messages={messages}
          name="Mohammed Ismail"
          status={Status.OFFLINE}
        />
      </div>
    </div>
  );
}
