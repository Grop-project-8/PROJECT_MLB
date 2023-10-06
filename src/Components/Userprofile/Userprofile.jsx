// import hero from "../../assets/hero/hero.svg";
import { useState,useEffect, } from "react";
import Dashboard from "../Dashboard/Dashboard";
import Userinfo from "./Userinfo/Userinfo";
import Recent from "./Recent/Recent";
import Continued from "./Continued/Continued";
import Browser from "./Browser/Browser";


const Userprofile = () => {


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
