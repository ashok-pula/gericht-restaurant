import React, { useRef, useState } from "react";
import { meal } from "../../constants";
import { BsFillPlayFill, BsPauseFill } from "react-icons/bs";

import "./Intro.css";

const Intro = () => {
  const videoRef = useRef();
  const [playVideo, setPlayVideo] = useState(false);
  return (
    <div className="app__video">
      <video
        src={meal}
        type="video/mp4"
        controls={false}
        loop
        muted
        ref={videoRef}
      />
      <div className="app__video-overlay flex__center">
        <div
          className="app__video-overlay_circle flex__center"
          onClick={() => {
            setPlayVideo((prev) => !prev);
            if (playVideo) videoRef.current.pause();
            else videoRef.current.play();
          }}
        >
          {playVideo ? (
            <BsPauseFill color="#fff" fontSize={30} />
          ) : (
            <BsFillPlayFill color="#fff" fontSize={30} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Intro;
