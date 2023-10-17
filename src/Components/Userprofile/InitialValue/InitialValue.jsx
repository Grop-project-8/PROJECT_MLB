import React, { useState, useEffect } from "react";

const InitialValue = () => {
  const [goalKcal, setGoalKcal] = useState(1000); // จำนวนค่า kcal ที่ต้องการลด
  const [kcalBurned, setKcalBurned] = useState(300); // จำนวน kcal ที่ได้รับจากการออกกำลังกาย

  useEffect(() => {
    const percentage = (kcalBurned / goalKcal) * 100;
    // แสดงค่าเปอร์เซ็นต์ใน Console
    console.log(`เปอร์เซ็นต์: ${percentage.toFixed(2)}%`);
  }, [goalKcal, kcalBurned]);

  const tubeStyle = {
    width: `${((kcalBurned / goalKcal) * 100).toFixed(2)}%`,
  };

  return (
    <div className="md:w-[100%] md:mr-5 mx-auto p-4 sm:p-0 items-center ">
      <h2>your goal</h2>
      <div className="w-full  bg-mygray rounded text-black">
        <div className="h-7 flex items-center ">
          <div className="bg-myGreen h-full rounded " style={tubeStyle}>
            <div className=" text-end w-full mt-1">
              {((kcalBurned / goalKcal) * 100).toFixed(2)}%
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InitialValue;
