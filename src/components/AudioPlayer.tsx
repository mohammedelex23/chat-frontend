import { useEffect } from "react";
import type { AudioChunks } from "../types";


export function AudioPlayer(props:{recordedURL:string}) {
   
//     useEffect(() =>{
// console.log("updated url", props.recordedURL);
        
//     },[props.recordedURL])
    return(
        <audio controls src={props.recordedURL == "" ? undefined : props.recordedURL}></audio>
    );
}