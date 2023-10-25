// import hero from "../../assets/hero/hero.svg";
import { useState, useEffect,useContext } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Userinfo from "./Userinfo/Userinfo";
// import Recent from "./Recent/Recent";
import Continued from "./Continued/Continued";
import Browser from "./Browser/Browser";
import { ContextProvider } from '../../Function/useContext'
import { getuser } from "../../Function/userRouter";
import { AiOutlineSetting } from "react-icons/ai";
import { GrFormPrevious } from "react-icons/gr";
import SetForm from "./Setting/Setting";
import { Chartduration } from "./Chart/Chartduration";
import Temp from "./Temp/Temp";

const Userprofile = () => {
  // const [userData, setUserData] = useState(null);
  const { userData ,setUserData } = useContext(ContextProvider);

  // console.log('uesr',userData)
  const goBack = () => {
    window.history.back();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await getuser();
        setUserData(response.data);
      } catch (error) {
        console.error("Error fetching data", error);
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
    <div className="container mx-auto px-4 relative">
      {/* <div className="flex justify-between	mt-5text-[30px]" >
      <GrFormPrevious onClick={goBack} />
      </div> */}

      <div className="lg:flex lg:space-x-10 ">
        <div className="bg-slate-400 p-4 rounded-xl w-auto lg:w-1/2 shadow-xl flex items-center shadow-[#999999] relative">
          <Userinfo userData={userData} toggleDashboard={toggleDashboard} />
        </div>
      <Temp/>

      <span className="absolute top-0 right-0 flex text-[1.75rem] items-start">Setting <AiOutlineSetting onClick={setform} /></span>

      </div>

      <div className="mt-[5rem] space-y-20">
        <Browser userData={userData}/>
        <Continued userData={userData} />
      </div>

      
      {showsetform ? ( <SetForm setform={setform} />) : (null) }


    </div>
  );
};

export default Userprofile;
