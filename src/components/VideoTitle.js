import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] pl-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 w-1/4 text-lg">{overview}</p>
      <div>
        <button className="bg-white text-black p-2 px-12 text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="bg-gray-500 mx-2 text-white p-2 px-8 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
