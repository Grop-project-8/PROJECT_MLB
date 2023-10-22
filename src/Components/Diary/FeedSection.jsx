import { useState } from "react";
/* import { useParams } from 'react-router-dom' */
import { GrFormClose } from "react-icons/gr";
import { BiSolidEditAlt } from "react-icons/bi";
import { updated } from "../../Function/activity";
import { activities } from "./actMockData";
/* import { getuser } from '../../Function/userRouter'
 */
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

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSaveClick = async (e) => {
    setIsEditing(false);
    e.preventDefault();
    // ส่งข้อมูลที่ต้องการอัปเดตไปยัง API
    updated(updatedData)
      .then((res) => {
        console.log(res.data);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <div className="flex m-1">
        <img
          className="rounded-full h-12 w-18"
          src="https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg"
          alt="User 1"
        />
        <div className="mx-2">
          <h3 className="font-bold">username</h3>
          <p className="text-[12px]">{createAt}</p>
        </div>
        <div>
          <div className="ml-auto">
            <BiSolidEditAlt size={20} onClick={handleEditClick} />
            <GrFormClose size={20} onClick={handleRemove} />
          </div>
          {isEditing ? (
            <div>
              {/* <select
                className="w-[50%]  p-2 rounded-lg m-2"
                value={updatedData.activitytype}
                onChange={changeActType}
                name="activitytype"
              >
                <option value="activitytype" selected>
                  -- Activity type --
                </option>
                {activities.map((actT, index) => (
                  <option key={index} value={actT.actType}>
                    {" "}
                    {actT.actType}
                  </option>
                ))}
              </select>

              <select
                className="w-[50%] p-2 rounded-lg m-2"
                value={updatedData.activityname}
                onChange={changeActName}
                name="activityname"
              >
                <option value="activityname" disabled selected>
                  -- Activity name --
                </option>
                {actName.map((actN, index) => (
                  <option key={index} value={actN.name}>
                    {" "}
                    {actN.name}{" "}
                  </option>
                ))}
              </select> */}

              <input
                type="text"
                name="updatedDetail"
                value={updatedData.updatedDetail}
                onChange={handleChange}
              />
              <input
                type="number"
                name="updatedDuration"
                value={updatedData.updatedDuration}
                onChange={handleChange}
              />
              <button onClick={handleSaveClick}>Save</button>
            </div>
          ) : (
            <div>
              <p>Activity type: {activityType}</p>
              <p>Activity name: {activityName}</p>
              <p>Duration: {duration} minutes</p>
              <p>{detail}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FeedSection;
