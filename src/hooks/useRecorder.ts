import { useEffect, useRef, useState, type RefObject } from "react";
import type { AudioBlobs, AudioChunks } from "../types";
import Crunker from "crunker";

export function useRecorder() {
  const [seconds, setSeconds] = useState(0);

  const [isRecording, setIsRecording] = useState(false);
  const [recordedURL, setRecordedURL] = useState("");

  const deleteRecord = useRef(false);

  const mediaStream: RefObject<MediaStream> = useRef(new MediaStream());
  const mediaRecorder: RefObject<MediaRecorder | null> = useRef(
    new MediaRecorder(mediaStream.current)
  );

  // useEffect(() => {
  //   console.log("calling useRecorder");
  // }, [mediaStream.current]);

  const chunks: RefObject<AudioChunks> = useRef([]);
  const blobs: RefObject<AudioBlobs> = useRef([]);

  const formatTime = (totalSeconds: number) => {
    const hours: number = Math.floor(totalSeconds / 3600);
    const minutes: number = Math.floor((totalSeconds % 3600) / 60);
    const secs: number = totalSeconds % 60;

    return `${hours.toString().padStart(2, "0")}:${minutes
      .toString()
      .padStart(2, "0")}:${secs.toString().padStart(2, "0")}`;
  };

  const timer: any = useRef(null);

  const mergeMyBlobs = async () => {
    const crunker = new Crunker();

    // 1. Convert your array of Blobs into AudioBuffers
    const buffersNested = await Promise.all(
      blobs.current.map((blob) => crunker.fetchAudio(URL.createObjectURL(blob)))
    );
    const buffers = buffersNested.flat();

    // 2. Concatenate them into one buffer
    const mergedBuffer = crunker.concatAudio(buffers);

    // 3. Export to a single Blob
    const output = crunker.export(mergedBuffer, "audio/mp3");

    setSeconds(Math.floor(mergedBuffer.duration));

    setRecordedURL(output.url);
  };

  const startRecording = async () => {
    setIsRecording(true);
    deleteRecord.current = false;
    try {
      const stream: MediaStream = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: false,
      });
      mediaRecorder.current = new MediaRecorder(stream);
      mediaStream.current = stream;

      mediaRecorder.current.ondataavailable = (e) => {
        if (e.data.size > 0) {
          chunks.current.push(e.data);
        }
      };

      timer.current = setInterval(() => {
        setSeconds((prev) => prev + 1);
      }, 1000);
      mediaRecorder.current.start();

      mediaRecorder.current.onstop = () => {
        if (deleteRecord.current) {
          // Clear everything and reset flag
          deleteRecord.current = false;
          chunks.current = [];
          blobs.current = [];
          return; // exit early nothing pushed
        }

        const recordedBlob = new Blob(chunks.current, { type: "audio/mp3" });
        blobs.current.push(recordedBlob);
        mergeMyBlobs();
        const url = URL.createObjectURL(recordedBlob);

        setRecordedURL(url);

        chunks.current = [];
        clearInterval(timer.current);
      };
    } catch (error) {
      console.log(error);
    }
  };

  const pauseRecording = () => {
    clearInterval(timer.current);
    setIsRecording(false);
    deleteRecord.current = false;

    if (mediaRecorder.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
      mediaRecorder.current.stop();
    }
    ``;
  };

  const resumeRecording = () => {
    startRecording();
  };

  const stopRecording = () => {
    clearInterval(timer.current);
    setIsRecording(false);

    if (mediaRecorder.current) {
      mediaStream.current.getTracks().forEach((track) => track.stop());
    }
  };

  const deleteRecording = () => {
    deleteRecord.current = true;

    chunks.current = [];
    blobs.current = [];

    // Stop timer/UI
    if (timer.current) clearInterval(timer.current);
    setSeconds(0);
    setIsRecording(false);
    setRecordedURL("");

    // Stop recorder/stream
    if (mediaRecorder.current && mediaRecorder.current.state !== "inactive") {
      mediaRecorder.current.stop();
    }
    mediaStream.current?.getTracks().forEach((track) => track.stop());
    mediaRecorder.current = null;
    mediaStream.current = new MediaStream();
  };

  return {
    seconds,
    formatTime,
    recordedURL,
    startRecording,
    pauseRecording,
    deleteRecording,
    stopRecording,
    resumeRecording,
    isRecording,
    chunks,
  };
}
