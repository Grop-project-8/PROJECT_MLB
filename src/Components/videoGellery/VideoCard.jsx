import React, { useState } from "react";

export default function VideoCard({ url, title, img }) {
  return (
    <div>
      <div className="w-[310px] h-[350px] bg-gray-200 rounded-[10px]">
        <div className="flex justify-center pt-2">
          <img className="w-[280px] h-[200px] rounded-[10px]" src={img} loading='lazy' />
          {/* <iframe
            className="w-[280px] h-[200px] rounded-[10px]"
            src={url}
            loading="lazy"
            title={title}
            frameborder="0"
            allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe> */}
        </div>

        <div className="pl-2 pt-1 m-[3px]">
         
          <p>{title}</p>
        </div>
      </div>
    </div>
  );
}
