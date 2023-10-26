import React, { useState } from "react";
import axios from "axios";

export default function VideoCard({ videoId, title, img }) {

  const handleVideoClick = async () => {
    try {
      await axios.post(import.meta.env.VITE_REACT_API_URL+"addlastVideo", { videoId: videoId }, { withCredentials: true });
    } catch (error) {
      console.error("Error sending video ID:", error);
    }
  };
  


  return (
    <div onClick={handleVideoClick} >
      <div className=" h-[350px]  bg-gray-200 rounded-[10px]">
        <div className="flex justify-center pt-2">
          <img className="w-[280px] h-[200px] rounded-[10px]" src={img} loading='lazy' />
        </div>
        <div className="pl-2 pt-1 m-[3px]">
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
