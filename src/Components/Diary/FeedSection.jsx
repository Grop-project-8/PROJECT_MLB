import { useState } from "react";
import { GrFormClose } from "react-icons/gr";
import { BiSolidEditAlt } from "react-icons/bi";
import { updated } from "../../Function/activity";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";
import Swal from 'sweetalert2';
import moment from 'moment'

const FeedSection = ({
  userData,
  activityType,
  activityName,
  detail,
  duration,
  createAt,
  id,
  handleRemove,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [updatedData, setUpdatedData] = useState({
    id: id,
    updatedDetail: detail,
    updatedDuration: duration,
  });
  
  const handleChange = (e) => {
    setUpdatedData({
      ...updatedData,
      [e.target.name]: e.target.value,
    });
  };


  const formattedDate = moment(createAt).format('llll');

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (e) => {
    setIsEditing(false);
    Swal.fire({
      title: 'Do you want to save the changes?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Save',
      denyButtonText: `Don't save`,
    }).then((result) => {
      if (result.isConfirmed) {
        // ส่งข้อมูลที่ต้องการอัปเดตไปยัง API
        updated(updatedData)
          .then((res) => {
            Swal.fire('Saved!', '', 'success');
            window.location.reload();
          })
          .catch((err) => {
            Swal.fire('Error', 'Failed to save changes', 'error');
          });
      } else if (result.isDenied) {
        Swal.fire('Changes are not saved', '', 'info');
      }
    });
  
    e.preventDefault();
  };

  /* const handleSaveClick = async (e) => {
    setIsEditing(false);
    e.preventDefault();
    // ส่งข้อมูลที่ต้องการอัปเดตไปยัง API
    updated(updatedData)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  }; */


  return (
    <div className="shadow-xl rounded-lg">
      <div className='flex  rounded-lg'>
          <div className='w-[60px] md:w-[60px] sm:w-[60px] ml-4'>
          <Avatar
                  className="cursor-pointer"
                  size={50}
                  icon={<UserOutlined />}
                  src={userData ? userData.profileImage : null}
                  alt="User Profile"
                />
          </div>
          <div className='mx-2 my-2'>
            <h3 className='font-bold text-xs'>username</h3>
            <p className='sm:text-[14px] max-[425px]:text-[11px] '>{formattedDate}</p> 
          </div>
          <div className='ml-auto flex items-center'>
              <BiSolidEditAlt className='hover: cursor-pointer scale-500 duration-300' size={30} onClick={handleEditClick} />
              <GrFormClose className='hover: cursor-pointer scale-500 duration-300' size={30} onClick={handleRemove} />
          </div>
      </div>
      {isEditing ? (
            <div className="flex flex-col">

              <div className="flex">
              <label name="updatedDetail">Discription :</label>
              <input
                type="text"
                name="updatedDetail"
                placeholder="discription"
                value={updatedData.updatedDetail}
                onChange={handleChange}
              />
              </div>
              <div className="flex">
              <label name='updatedDuration'>Duration :</label>
              <input
                type="number"
                name="updatedDuration"
                placeholder="duration"
                value={updatedData.updatedDuration}
                onChange={handleChange}
              />
              </div>
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div className="shadow-xl space-y-3 mt-4 rounded-lg ">
              <div className="flex flex-col justify-around items-center text-center space-y-2">
              <p className="lg:text-[17px] md:text-[15px] max-[375px]:text-[13px] text-gray-600">Activity type: {activityType}</p>
              <p className="lg:text-[17px] md:text-[15px] max-[375px]:text-[13px] text-gray-600">Activity name: {activityName}</p>
              <p className="lg:text-[17px] md:text-[15px] max-[375px]:text-[13px] text-gray-600">Duration: {duration} minutes</p>
              </div>
              <p className='bg-white w-full p-2 lg:text-[20px] md:text-[18px] sm:text-[17px] max-[375px]:text-[15px] rounded-[10px] break-words'>{detail}</p>
            </div>
          )}
    </div>
    );
  };


export default FeedSection;
