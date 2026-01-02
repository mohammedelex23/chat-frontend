import { faCirclePause } from "@fortawesome/free-solid-svg-icons/faCirclePause";
import { faCircleStop } from "@fortawesome/free-solid-svg-icons/faCircleStop";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons/faPaperPlane";
import { faTrash } from "@fortawesome/free-solid-svg-icons/faTrash";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { AudioPlayer } from "./AudioPlayer";
import type { AudioChunks } from "../types";

export function VoiceRecordingComponent(props: {
  handleStartRecording: any;
  handlePauseRecording: any;
  handleStopRecording: any;
  handleResumeRecording: any;
  handleRemoveRecording: any;
  isRecording: boolean;
  seconds: number;
  formatTime: any;
  recordedURL: string,
  chunks:AudioChunks
}) {

  return (
    <div
      className="absolute bg-white
    left-0 bottom-0 w-full
    text-center p-3
    shadow
    "
    >
      {/* timeer */}
      <div
        className="flex flex-col justify-center
  items-center"
      >
        <h2 className="text-2xl mb-1 font-mono">
          {props.formatTime(props.seconds)}
        </h2>

        { !props.isRecording && <AudioPlayer  recordedURL={props.recordedURL} />}
      </div>
      {/* buttons: send + pause resume + delete */}
      <div
        className="flex justify-between
      mt-3 items-center px-4
      "
      >
        <button type="button" onClick={props.handleRemoveRecording}>
          <FontAwesomeIcon
            className="text-xl cursor-pointer
         text-red-500"
            icon={faTrash}
          />
        </button>
        {props.isRecording ? (
          <button
            type="button"
            className="bg-red-500
        rounded-full w-9 h-9
        "
            onClick={props.handlePauseRecording}
          >
            <FontAwesomeIcon
              className="text-2xl
            text-white 
        cursor-pointer"
              icon={faCircleStop}
            />
          </button>
        ) : (
          <button
            type="button"
            className="bg-red-500
        rounded-full w-9 h-9
        "
            onClick={props.handleResumeRecording}
          >
            <FontAwesomeIcon
              className="text-2xl
            text-white 
        cursor-pointer"
              icon={faCirclePause}
            />
          </button>
        )}
        <button type="button" onClick={props.handleStopRecording} className="cursor-pointer bg-primary block p-2 rounded-sm">
          <FontAwesomeIcon className="text-white" icon={faPaperPlane} />
        </button>
      </div>
    </div>
  );
}
