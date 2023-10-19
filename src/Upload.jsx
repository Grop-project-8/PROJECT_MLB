import React, { useState } from "react";
import Resize from "react-image-file-resizer";
import axios from "axios";
import { AiFillCamera } from 'react-icons/ai'
import { Spin } from "antd";

const Upload = ({ userData }) => {
  const [image, setImage] = useState(userData.profileImage);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeFile = (e) => {
    setIsLoading(true); // กำลังโหลด

    const files = e.target.files;
    Resize.imageFileResizer(
      files[0],
      720,
      720,
      "JPEG",
      100,
      0,
      (uri) => {
        axios.post("http://localhost:8000/createImage", {
          image: uri,
        }, {
          withCredentials: true,
        }).then(res => {
          setImage(URL.createObjectURL(files[0])); // แสดงรูปทันทีหลังจากอัปโหลดสำเร็จ
          setIsLoading(false); // หยุดโหลด
          console.log(res);
        }).catch(err => {
          console.log(err);
          setIsLoading(false); // หยุดโหลดหากเกิดข้อผิดพลาด
        });
        console.log(uri);
      },
      "base64"
    );
  };

  return (
    <div className="text-md text-mygray relative ">
      <label>
        <div className="rounded-full overflow-hidden mx-auto w-[10rem] relative">
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10rem" }}>
              <Spin/>
            </div>
          ) : (
            <img className="w-full" src={image} alt="img_user" />
          )}
        </div>
        <AiFillCamera className="cursor-pointer absolute top-[80%] md:right-[25%] right-[10%]" />
        <input
          type="file"
          name="file"
          hidden
          accept="images/*"
          onChange={handleChangeFile}
        />
      </label>
    </div>
  );
};

export default Upload;