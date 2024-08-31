import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[20%] px-6 md:px-20 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block py-6 text-sm w-1/2">{overview}</p>

      <div className="">
        <button className="my-4 md:my-0 bg-white text-black p-4 px-3 md:px-12 py-1 md:py-4 text-lg mr-1  rounded-lg hover:bg-opacity-80">
          ▶️Play
        </button>
        <button className="hidden md:inline-block bg-gray-500 text-white p-4 px-12 text-lg  rounded-lg hover:bg-opacity-80">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
