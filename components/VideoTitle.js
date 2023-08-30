import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <>
      <div className="pt-36 px-12 absolute text-white">
        <h1 className="text-2xl md:text-6xl font-bold">{title}</h1>
        <p className="hidden md:inline-block py-6 text-lg w-1/4">{overview}</p>
        <div className="my-4 md:m-0">
          <button className="bg-white text-black font-semibold py-1 md:p-4 md:px-12 text-xl rounded-lg hover:bg-opacity-80">
            Play
          </button>
          <button className="hidden md:inline-block mx-2 bg-gray-500 text-white p-4 px-12 text-xl rounded-lg">
            More Info
          </button>
        </div>
      </div>
    </>
  );
};

export default VideoTitle;
