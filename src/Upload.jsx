import React, { useState,useContext } from "react";
import Resize from "react-image-file-resizer";
import axios from "axios";
import { Spin } from "antd";
import { ContextProvider } from './Function/useContext'
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";




const Upload = ({userData}) => {

  const [image, setImage] = useState(userData.profileImage);

  const { success, setSuccess } = useContext(ContextProvider); 

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
        axios.post(import.meta.env.VITE_REACT_API_URL+"createImage", {
          image: uri,
        }, {
          withCredentials: true,
        }).then(res => {
          setImage(res.data.secure_url);
          setIsLoading(false); 
          setSuccess(prev => !prev)
          // console.log(res);
        }).catch(err => {
          console.log(err);
          setIsLoading(false); 
        });
        console.log(uri);
      },
      "base64"
    );
  };

  return (
    <div className="">
      <label>
        <div className="rounded-full overflow-hidden  mx-auto">
          {isLoading ? (
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "10rem" }}>
              <Spin/>
            </div>
          ) : (
            <Avatar
            className="cursor-pointer"
            size={150}
            icon={<UserOutlined />}
            src={userData ? image : null}
            alt="img_use"
          />
          )}
        </div>
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


