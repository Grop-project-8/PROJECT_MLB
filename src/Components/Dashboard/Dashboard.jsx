import  { useState, useEffect } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

const Dashboard = () => {
  
  // ข้อมูล login ที่ใช้สำหรับการทดสอบ 
  const mockLoginData = ['2023-09-15', '2023-09-16', '2023-09-17'];

  // ฟังก์ชันสำหรับการแปลงวันที่เป็นรูปแบบที่ต้องการ
  const getFormattedDate = (date) => {
    if (date instanceof Date) {
      return date.toISOString().substr(0, 10); // แปลงเป็นรูปแบบ 'YYYY-MM-DD'
    }
    return '';
  };

  // สร้าง state สำหรับข้อมูล login และวันที่ที่เลือก
  const [loginData, setLoginData] = useState(mockLoginData.map((dateString) => new Date(dateString)));
  const [selectedDate, setSelectedDate] = useState(new Date());

  // ฟังก์ชันสำหรับกำหนด className ของแต่ละ tile ในปฏิทิน
  const tileClassName = ({ date }) => {
    const localISOString = getFormattedDate(date);
    const loginDay = loginData.some((dateItem) => getFormattedDate(dateItem) === localISOString);
    const isPastDate = date < new Date();

    let className = 'bg-gray-300 text-black '; // สี bg-ปฎิทิน

    if (loginDay) {
      className = 'bg-myGreen text-black'; // ถ้า Login ใช้สีเขียว
    } else if (isPastDate) {
      className = 'bg-blue text-black'; // ถ้าไม่เลยปัจจุบันเป็นสีฟ้า
    }

    return className;
  };

  return (
    <div className="max-w-md  p-3 ">
      <Calendar
        onChange={setSelectedDate}
        value={selectedDate}
        tileClassName={tileClassName}
        className="w-full  text-black p-5 rounded-lg" 
        locale="en-US" 
      />
    </div>
  );
};

export default Dashboard;