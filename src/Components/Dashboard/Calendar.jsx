import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Calendar = () => {
  // const mockLoginData = [
  //   '2023-09-15',
  //   '2023-09-16',
  //   '2023-09-17',
  // ].map((dateString) => new Date(dateString));

  const mockLoginData = [
    new Date(2023, 8, 15),
    new Date(2023, 8, 16),
    new Date(2023, 8, 23),
  ];

  const formatDate = (date) => {
    return date instanceof Date ? date.toISOString().substr(0, 10) : "";
  };

  const [loginData] = useState(mockLoginData);
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
    <div className="max-w-md p-3">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
        className="w-full text-black p-5 rounded-lg"
        locale="en-US"
      />
    </div>
  );
};

export default Calendar;
