// import hero from "../../assets/hero/hero.svg";
import { useState,useEffect, } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Userinfo from "./Userinfo/Userinfo";
import Recent from "./Recent/Recent";
import Continued from "./Continued/Continued";
import Browser from "./Browser/Browser";
import {currentUser} from '../Function/auth'


const Userprofile = () => {

  const fetchCurrentUser = async () => {
    try {
      const response = await currentUser();
      if (response.status === 200) {
        const user = response.data;
        console.log("ข้อมูลผู้ใช้:", user);
        // ทำอะไรกับข้อมูลผู้ใช้ต่อได้ที่นี่
      } else {
        console.error("ไม่สามารถรับข้อมูลผู้ใช้ได้");
      }
    } catch (error) {
      console.error("เกิดข้อผิดพลาดในการร้องขอข้อมูลผู้ใช้", error);
    }
  };
  
  // เรียกใช้ฟังก์ชันเพื่อดึงข้อมูลผู้ใช้
  fetchCurrentUser();
  
  
  
  
  
  
  


  const [showDashboard, setShowDashboard] = useState(false);


  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="container mx-auto px-4">
      <Userinfo   toggleDashboard={toggleDashboard} />

      {showDashboard ? (
        <Dashboard />
      ) : (

        <>
          <Recent />
          <div>
            <Continued />
            <Browser />
          </div>
        </>

      )}
    </div>
  );
};

export default Userprofile;
