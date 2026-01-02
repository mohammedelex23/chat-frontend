import {
  faArrowLeft,
  faMicrophone,
  faSearch,
  faPaperPlane,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Status } from "../enums";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useRecorder } from "../hooks/useRecorder";
import { ConversationMessagesList } from "./ConversationMessagesList";
import { VoiceRecordingComponent } from "./VoiceRecordingComponent";

export function Conversation(props: {
  name: string;
  status: Status;
  conversationId: string;
  messages: { id: string; value: string; time: string; isRead: boolean }[];
}) {
  const [showSearchBox, setShowSearchBox] = useState(false);
  const [showRecordingItem, setShowRecordingItem] = useState(false);

  const Navigate = useNavigate();

  const {
    startRecording,
    deleteRecording,
    pauseRecording,
    resumeRecording,
    stopRecording,
    isRecording,
    seconds,
    chunks,
    formatTime,
    recordedURL,
  } = useRecorder();

  const handleStartRecording = () => {
    setShowRecordingItem(true);
    startRecording();
  };
  const handlePauseRecording = () => {
    pauseRecording();
  };
  const handleStopRecording = () => {
    stopRecording()
  }
  const handleResumeRecording = () => {
    resumeRecording();
  };

  const handleRemoveRecording = () => {
    deleteRecording();
    setShowRecordingItem(false);
  };

  const handleShowSearchBox = () => (e: any) => {
    e.stopPropagation();
    setShowSearchBox(true);
  };
  const handleHideSearchBox = () => (e: any) => {
    e.stopPropagation();
    const targetId = e.target.id;
    if (targetId !== "search" && targetId !== "searchBox") {
      setShowSearchBox(false);
    }
  };

  return (
    <div
      onClick={handleHideSearchBox()}
      className="relative h-full
    flex flex-col
    justify-between
    "
    >
      <div
        className="px-4 py-3 flex
    items-center 
    shadow relative
    "
      >
        {/* header with avatar and search */}
        <div
          className="
          select-none
          flex
     items-center
     gap-3
     "
        >
          {/* back arrow */}
          <FontAwesomeIcon
            className="
        text-primary 
        cursor-pointer
        text-xl"
            onClick={() => Navigate(-1)}
            icon={faArrowLeft}
          />
          {/* avatar with name and status */}
          <AvatarWithStatus name={props.name} status={props.status} />
        </div>
        <FontAwesomeIcon
          onClick={
            showSearchBox ? handleHideSearchBox() : handleShowSearchBox()
          }
          className="ml-auto text-2xl
       text-gray-400
       cursor-pointer
       "
          icon={faSearch}
        />
        {/* search box */}
        {showSearchBox && <SearchBox />}
      </div>

      {/* messages list */}
      <div
        className="
      bg-gray-100
        h-full
        overflow-auto
        p-4
        "
      >
        <ConversationMessagesList
          name={props.name}
          messages={[
            {
              id: "1",
              from: "Mohammed Ismail",
              to: "Ahmed Ali",
              value: "hey what is goin on, are you ok",
              time: "11:22am",
              isRead: true,
            },
            {
              id: "1",
              to: "Mohammed Ismail",
              from: "Ahmed Ali",
              value: "hello",
              time: "11:22am",
              isRead: true,
            },
            {
              id: "1",
              from: "Mohammed Ismail",
              to: "Ahmed Ali",
              value: "hello",
              time: "11:22am",
              isRead: true,
            },
            {
              id: "1",
              to: "Mohammed Ismail",
              from: "Ahmed Ali",
              value: "hello",
              time: "11:22am",
              isRead: true,
            },
            {
              id: "1",
              from: "Mohammed Ismail",
              to: "Ahmed Ali",
              value: "when would you come home",
              time: "11:22am",
              isRead: true,
            },
            {
              id: "1",
              from: "Mohammed Ismail",
              to: "Ahmed Ali",
              value: "hey what is goin on, are you ok",
              time: "11:22am",
              isRead: false,
            },
            {
              id: "1",
              to: "Mohammed Ismail",
              from: "Ahmed Ali",
              value: "hello",
              time: "11:22am",
              isRead: false,
            },
            {
              id: "1",
              from: "Mohammed Ismail",
              to: "Ahmed Ali",
              value: "hello",
              time: "11:22am",
              isRead: false,
            },
            {
              id: "1",
              to: "Mohammed Ismail",
              from: "Ahmed Ali",
              value: "hello",
              time: "11:22am",
              isRead: false,
            },
            {
              id: "1",
              from: "Mohammed Ismail",
              to: "Ahmed Ali",
              value: "when would you come home",
              time: "11:22am",
              isRead: false,
            },
          ]}
        />
      </div>
      {/* message input form*/}
      <form
        className=" 
        flex items-center
    self-end
     w-full
     px-4 pt-3
     pb-4
     backdrop-blur-md
     bg-gray-200 shadow-md
      group-2:
     "
        action=""
      >
        <input
          className="shadow rounded-sm 
          w-full
          px-4 py-2.5
          mr-3 outline-none
          text-sm
          bg-white
          text-gray-600
          "
          type="text"
          placeholder="Type your message"
        />
        <button
          type="button"
          className="bg-primary 
        rounded-full
        cursor-pointer
        w-12 h-9 mr-3 mt-1
        "
          onClick={handleStartRecording}
        >
          <FontAwesomeIcon
            className="text-white text-2xl"
            icon={faMicrophone}
          />
        </button>
        <button className="cursor-pointer bg-primary block w-12 h-9 rounded-sm">
          <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
        </button>
        {showRecordingItem && (
          <VoiceRecordingComponent
          handleStopRecording={handleStopRecording}
            chunks={chunks.current}
            seconds={seconds}
            formatTime={formatTime}
            recordedURL={recordedURL}
            isRecording={isRecording}
            handleStartRecording={handleStartRecording}
            handlePauseRecording={handlePauseRecording}
            handleResumeRecording={handleResumeRecording}
            handleRemoveRecording={handleRemoveRecording}
          />
        )}
      </form>
    </div>
  );
}

function AvatarWithStatus(props: { name: string; status: Status }) {
  return (
    <div className="flex gap-4 items-center">
      <div className="relative">
        <img
          className="w-12 rounded-full"
          src="/src/assets/profile.JPG"
          alt="profile"
        />
        <div
          className={`absolute 
        bottom-0 right-0
        w-3 h-3 rounded-full
        border-2 border-white
        ${props.status == Status.ONLINE ? "bg-green-500" : "bg-orange-400"}  
`}
        ></div>
      </div>
      <div className="flex flex-col">
        <span className="font-medium">{props.name}</span>
        <span className="text-gray-500 text-sm">{props.status}</span>
      </div>
    </div>
  );
}

function SearchBox() {
  return (
    <div
      id="searchBox"
      className="
        absolute right-4
        -bottom-8
        bg-white shadow shadow-gray-300
        rounded-sm
        p-2
        "
    >
      <input
        name="searchInput"
        id="search"
        className="
          w-35
          text-sm border
        border-gray-300
          px-4 py-2
          outline-none
          text-gray-600
          rounded-sm
        "
        type="text"
        placeholder="Search.."
      />
    </div>
  );
}
