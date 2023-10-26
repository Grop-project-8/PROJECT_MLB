import React, {  useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import moment from "moment";




const Dashboard = ({userData}) => {


  const formatDate = (date) => {
    return date instanceof Date ? moment(date).format("YYYY-MM-DD") : "";
  };

  const loginData = userData ? userData.loginTimes.map(time => new Date(time)) : [];

  const [selectedDate, setSelectedDate] = useState(new Date());

    const tileClassName = ({ date }) => {
    const localISOString = formatDate(date);
    const loginDay = loginData.some(
      (dateItem) => formatDate(dateItem) === localISOString
    );

    const isPastDate = date < new Date();

    let className = "bg-gray-300 text-black";

    if (loginDay) {
      className = "bg-myGreen text-black";
    } else if (isPastDate) {
      className = "bg-blue text-black";
    }

    return className;
  };

  return (
    <div className="w-full lg:w-1/4 p-3 flex items-center">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
        className="w-full border-none p-5 rounded-xl"
        locale="en-US"
      />
    </div>
  );
};

export default Dashboard;
