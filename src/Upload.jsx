import React from "react";
import Resize from "react-image-file-resizer";
import axios from "axios";


const Upload = () => {

  const handleChangeFile = (e) => {
    const files = e.target.files;
    Resize.imageFileResizer(
      files[0], 
      720,
      720,
      "JPEG",
      100,
      0,
      (uri) => {
        axios.post("http://localhost:8000/createImage",{
            image:uri,
        },{
            withCredentials: true,
        }).then(res=>{
            console.log(res)
        }).catch(err=>{
            console.log(err)
        })
        console.log(uri);
      },
      "base64"
    );
  };

  return (
    <div>
      <label>
        เลือกไฟล์
        <input
          type="file"
          name="file"
          accept="images/*"
          onChange={handleChangeFile}
        />
      </label>
    </div>
  );
};

export default Upload;
