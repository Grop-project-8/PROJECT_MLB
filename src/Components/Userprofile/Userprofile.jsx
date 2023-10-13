// import hero from "../../assets/hero/hero.svg";
import { useState,useEffect, } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Userinfo from "./Userinfo/Userinfo";
import Recent from "./Recent/Recent";
import Continued from "./Continued/Continued";
import Browser from "./Browser/Browser";
import InitialValue from './InitialValue/InitialValue'


const Userprofile = () => {

  const [showDashboard, setShowDashboard] = useState(false);

  const toggleDashboard = () => {
    setShowDashboard(!showDashboard);
  };

  return (
    <div className="container mx-auto px-4">
      <div className="mt-10">
      <Userinfo   toggleDashboard={toggleDashboard} />
      </div>
      

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
