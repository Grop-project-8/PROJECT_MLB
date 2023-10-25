import React from "react";

const Itemcon = ({ img, title, className }) => {
  return (
    <div className={`bg-slate-300 rounded-[12px]  h-[30vh]  mb-10 ${className} `}>
      <img src={img} alt="thumbnail"  className="p-4 mx-auto rounded-[30px] " />
      <div className="mx-5">
        <p className="">{title}</p>
      </div>
    </div>
  );
};

export default Itemcon;

