import { useState } from "react";
import hero from "../../../assets/hero/hero.svg";
import InitialValue from "../InitialValue/InitialValue";
import EditForm from "../Userform/Userform";
import { createImage } from '../../../Function/userRouter'
import Upload from "../../../Upload";

const Userinfo = ({ userData,toggleDashboard }) => {

  const [showEditform, setShowEditform] = useState(false);
  const [image, setImage] = useState([]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const Editform = () => {
    setShowEditform(!showEditform);
  };

  let status = '';
  if (userData.bmi < 18.5) {
    status = 'อยู่ในเกณฑ์น้ำหนักน้อยหรือผอม';
  } else if (userData.bmi >= 18.5 && userData.bmi < 22.9) {
    status = 'อยู่ในเกณฑ์ปกติ';
  } else if (userData.bmi >= 23 && userData.bmi < 24.9) {
    status = 'น้ำหนักเกิน';
  } else if (userData.bmi >= 25 && userData.bmi < 29.9) {
    status = 'โรคอ้วนระดับที่ 1';
  } else if (userData.bmi >= 30) {
    status = 'โรคอ้วนระดับที่ 2';
  }



  return (
    <div className="w-full md:flex ">
      <div className="  mx-auto w-1/2  md:w-1/3 ">
       
        <Upload userData={userData}/>
        
      
        <div className="text-center mt-2">
            <button onClick={Editform} >
            Edit Profile
            </button>
          </div>
      </div>
      <div className=" mx-[20px]  w-full ">
          <div className="w-full  md:flex  ">
            <div className="w-full">
            <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">Username : {userData.username}</h2>
            <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">height : {userData.height} cm</h2>
            <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">weight : {userData.weight} kg</h2>
          </div>
            <div className=" md:inline w-full ">
              <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">BMI : {userData.bmi} </h2>
              <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">
                Status : {status}
              </h2>
              <InitialValue />
            </div>
          </div>
          <button
            onClick={toggleDashboard}
            className="2xl:text-sm text-xs bg-myGreen px-2 py-2 rounded-[12px] w-1/3 mt-5 hidden lg:block "
          >
            view dashboard
          </button>
        </div>

        {showEditform ? ( <EditForm data={userData} Editform={Editform} />) : (null) }

    </div>
  );
};

export default Userinfo;
