import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[18%] pl-6 md:pl-12 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 w-1/4 text-lg">{overview}</p>
      <div className="my-2 md:my-0">
        <button className="bg-white text-black p-1 md:p-2 px-4 md:px-12 text-xl  rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 mx-2 text-white p-2 px-8 text-xl bg-opacity-50 rounded-lg">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
