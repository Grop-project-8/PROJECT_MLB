import React from "react";

const ItemRecent = ({ video }) => {
    
  return (
    <div className="bg-slate-400 rounded-[12px] w-full h-[10rem] flex justify-center items-center">
      <video src={video.url} controls className="w-[50%] h-[80%] mx-3"></video>
      <div className="mx-5">
        <p className="">{video.name}</p>

        <button className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px]">
          play again
        </button>
        
      </div>
    </div>
  );
};

export default ItemRecent;
