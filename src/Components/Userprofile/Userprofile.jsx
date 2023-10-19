// import hero from "../../assets/hero/hero.svg";
import { useState,useEffect, } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Userinfo from "./Userinfo/Userinfo";
// import Recent from "./Recent/Recent";
import Continued from "./Continued/Continued";
import Browser from "./Browser/Browser";
import InitialValue from './InitialValue/InitialValue'
import {getuser} from '../../Function/userRouter'
import {AiOutlineSetting} from 'react-icons/ai'
import {GrFormPrevious} from 'react-icons/gr'
import EditForm from "./Userform/Userform";
import SetForm from "./Setting/Setting";


const Userprofile = () => {

  const [userData, setUserData] = useState(null);

  // console.log('uesr',userData)
  const goBack = () => {
    window.history.back();
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getuser();
        setUserData(response.data); 
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };
    fetchData();
  }, []);

  const [showDashboard, setShowDashboard] = useState(false);
  const [showsetform, setShowSetform] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  const setform = () => {
    setShowSetform(!showsetform);
  };


  return (
    <div className="container mx-auto px-4">
      
      <div className="flex justify-between		mt-5	 text-[30px]" >
      <GrFormPrevious onClick={goBack} />
      <AiOutlineSetting onClick={setform} />
      </div>
  
      <div className="mt-10 bg-slate-400 rounded-xl p-5"> 
      <Userinfo  userData={userData}  toggleDashboard={toggleDashboard} />
      </div>
      

      {showDashboard ? (
        <Dashboard  userData={userData} />
      ) : (

        <>
          {/* <Recent /> */}
          <div>
            <Continued userData={userData} />
            <Browser />
          </div>
        </>
      )}
          {showsetform ? ( <SetForm setform={setform} />) : (null) }

    </div>
  );
};

export default Userprofile;
