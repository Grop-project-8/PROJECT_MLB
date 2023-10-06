import React from "react";

const Itemcon = ({video}) => {
  return (
    <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
      <video
        src={video.url}
        controls
        className="w-[50%] h-[80%] ml-3"
      ></video>
      <div className="mx-5">
        <p className="">{video.name}</p>
      </div>
    </div>
  );
};

export default Itemcon;
