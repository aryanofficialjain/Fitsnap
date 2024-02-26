import React, { useContext } from "react";
import { Context } from "../context/ContextResultProvider";
import ReactPlayer from "react-player";

const MuscleVideo = () => {
  const { VideoData } = useContext(Context);

  // Check if VideoData is not an array or is empty
  if (!Array.isArray(VideoData) || VideoData.length === 0) {
    return <div>No videos found</div>;
  }

  return (
    <div>
      {VideoData.map((video, index) => (
        <div key={index}>
          <h1>{video.title}</h1>
          <ReactPlayer controls={true} url={video.link} width={"500px"} height={"400px"} />
        </div>
      ))}
    </div>
  );
};

export default MuscleVideo;
