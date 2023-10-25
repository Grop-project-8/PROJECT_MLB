import { useState } from "react";
/* import { useParams } from 'react-router-dom' */
import { GrFormClose } from "react-icons/gr";
import { BiSolidEditAlt } from "react-icons/bi";
import { updated } from "../../Function/activity";
import Swal from 'sweetalert2';
/* import { getuser } from '../../Function/userRouter'
 */
import moment from 'moment'

const FeedSection = ({
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

  const formattedDate = moment(createAt).startOf('hour').fromNow();


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

  return (
    <div className="shadow-xl rounded-lg">
      <div className='flex ml-5 rounded-lg'>
          <div className='w-[60px] md:w-[60px] sm:w-[60px]'>
          <img
              className='w-full rounded-full'
              src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
              alt='User 1'
            />
          </div>
          <div className='mx-4 my-2'>
            <h3 className='font-bold text-xs'>username</h3>
            <p className='text-[12px]'>{formattedDate}</p> 
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
            <div className="shadow-xl space-y-3 mt-4 rounded-lg">
              <div className="flex justify-around">
              <p className="lg:text-xs md:text-[13px] text-gray-600">Activity type: {activityType}</p>
              <p className="lg:text-xs md:text-[13px] text-gray-600">Activity name: {activityName}</p>
              </div>
              <div className="flex justify-start pl-12 text-xs text-gray-600">
              <p>Duration: {duration} minutes</p>
              </div>
              <p className='bg-white w-full p-2 rounded-[10px] break-words'>{detail}</p>
            </div>
          )}
    </div>
    );
  };


export default FeedSection;
