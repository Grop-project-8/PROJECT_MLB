import { useState } from "react";
import hero from "../../../assets/hero/hero.svg";
import InitialValue from "../InitialValue/InitialValue";
import EditForm from "../Userform/Userform";
import { createImage } from '../../../Function/userRouter'
import Upload from "../../../Upload";

const Userinfo = ({ userData,toggleDashboard }) => {

  const [showEditform, setShowEditform] = useState(false);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const Editform = () => {
    setShowEditform(!showEditform);
  };

  let status = '';
  if (userData.bmi < 18.5) {
    status = 'Underweight';
  } else if (userData.bmi >= 18.5 && userData.bmi < 22.9) {
    status = 'Normal weight';
  } else if (userData.bmi >= 23 && userData.bmi < 24.9) {
    status = 'Overweight';
  } else if (userData.bmi >= 25 && userData.bmi < 29.9) {
    status = 'Obesity Level 1';
  } else if (userData.bmi >= 30) {
    status = 'Obesity Level 2';
  }
  


  return (
    <div className="w-full  md:flex items-center justify-around	 ">
      <div className="">
       
        <Upload userData={userData}/>
        
        <div className="text-center mt-2">
            <button onClick={Editform} >
            Edit Profile
            </button>
          </div>
      </div>

      <div className="flex  md:ml-5">
          <div className="w-full ">
            <div className="w-full  ">

           <div className=" ">
           <h2 className="lg:text-[1.75rem] text-[1.25rem] md:text-[1.5rem] ">Username : {userData.username}</h2>
           </div>

           <div className="w-full">
  <div className=" ">
    <h2 className="w-auto lg:text-[1.75rem] text-[1.5rem] md:text-[1.5rem]">
      height: {userData.height} cm
    </h2>
    <h2 className="w-auto lg:text-[1.75rem] text-[1.5rem] md:text-[1.5rem]">
      weight: {userData.weight} kg
    </h2>
    <h2 className="lg:text-[1.75rem] text-[1.5rem] md:text-[1.5rem] ">BMI : {userData.bmi} </h2>

  </div>
  <div className="md:inline w-full">
    <h2 className="lg:text-[1.75rem] text-[1.25rem] md:text-[1.5rem]">
      Status: {status}
    </h2>
    {/* <InitialValue /> */}
  </div>
</div>

          </div>
         
          </div>
          {/* <button
            onClick={toggleDashboard}
            className="lg:text-[1.5rem] bg-myGreen px-2 py-2 w-full rounded-[12px] w-1/3 mt-5 hidden lg:block "
          >
            view dashboard
          </button> */}
        </div>

        {showEditform ? ( <EditForm data={userData} Editform={Editform} />) : (null) }

    </div>
  );
};

export default Userinfo;
