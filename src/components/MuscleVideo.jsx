import React, { useContext } from "react";
import { Context } from "../context/ContextResultProvider";
import ReactPlayer from "react-player";
import Loader from "./Loader";
const MuscleVideo = () => {
  const { VideoData } = useContext(Context);

  // Check if VideoData is not an array or is empty
  if (!Array.isArray(VideoData) || VideoData.length === 0) {
    return <Loader />
  }

  return (
    <div className="flex items-center flex-wrap justify-center gap-2">
      {VideoData.map((video, index) => (
        <div key={index}>
          <h1>{video.title}</h1>
          <ReactPlayer controls={true} url={video.link} width={"500px"} height={"250px"} />
        </div>
      ))}
    </div>
  );
};

export default MuscleVideo;
