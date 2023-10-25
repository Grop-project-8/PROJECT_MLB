import { activities } from "./actMockData.js";
import FeedSection from "./FeedSection";
import { useEffect, useState, useContext } from "react";
import { create, removed } from "../../Function/activity";
import { getuser } from "../../Function/userRouter";
import Swal from "sweetalert2";
import { ContextProvider } from "../../Function/useContext";
import { Avatar } from "antd";
import { UserOutlined } from "@ant-design/icons";



const DiaryCard = () => {
  const { userData } = useContext(ContextProvider);
  const [activityType, setActivityType] = useState("");
  const [activityName, setActivityName] = useState("");
  const [actName, setActName] = useState([]);

  const [data, setData] = useState({ username: "", activity: [] });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    getuser()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };

  const [feed, setFeed] = useState({
    activitytype: activityType,
    activityname: "",
    detail: "",
    duration: "",
  });

  const handleChange = (e) => {
    setFeed({
      ...feed,
      [e.target.name]: e.target.value,
    });
  };

  const changeActType = (even) => {
    setActivityType(even.target.value);
    setActName(
      activities.find((actT) => actT.actType === even.target.value).actName
    );
    setFeed({
      ...feed,
      [even.target.name]: even.target.value,
    });
  };

  const changeActName = (even) => {
    setActivityName(even.target.value);
    setFeed({
      ...feed,
      [even.target.name]: even.target.value,
    });
  };

  /* console.log("detail :",detail,"duration :",duration,"Type : ",activityType,"Name :",activityName);
   */
  const handleSubmit = async (e) => {
    create(feed) // จะรับข้อมูลที่ Submit มาจาก Form
      .then((res) => {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Post Success",
          showConfirmButton: false,
          timer: 1500,
        });
        loadData();
      })
      .catch((err) => console.log(err));
    e.preventDefault();
  };

  const handleRemove = async (id) => {
    removed(id)
      .then((res) => {
        //console.log(res.data);
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Post Deleted Success!!",
          showConfirmButton: false,
          timer: 1500,
        });
        loadData();
      })
      .catch((err) => console.log(err));
  };

  /* const handleUpdate = async (id,data) => {
        console.log(id,data);
        update(id,feed)
            .then(res => {
            console.log(res.data);
            loadData();
          })
          .catch((err) => console.log(err));
      } */
  /* console.log(data); */

  return (
    <div className="lg:grid grid-cols-2 ">
      {/* Post */}
      <div className=" mx-auto ">
        <form
          onSubmit={handleSubmit}
          className="shadow-xl w-[300px] lg:w-[300px] mx-auto lg:sticky top-0  md:w-[400px] sm:w-[400px]  p-4 bg-yellow-100 rounded-xl flex flex-col items-center"
        >
          <div className="text-center w-[50%] text-xs">
            <Avatar
            className="cursor-pointer"
            size={100}
            icon={<UserOutlined />}
            src={userData && userData.profileImage ? userData.profileImage : null}
            alt="Your Avatar"
          />
          </div>
          <h1 className="font-bold m-2">{userData && userData.username}</h1>
          <label className="m-2">Choose an activity</label>
          <div className="flex flex-wrap" name="Activity type">
            <div className="space-y-2">
              <select
                className="w-full p-2 rounded-lg"
                value={feed.activitytype}
                onChange={changeActType}
                name="activitytype"
              >
                <option value="activitytype" selected>
                  -- Activity type --
                </option>
                {activities.map((actT, index) => (
                  <option key={index} value={actT.actType}>
                    {actT.actType}
                  </option>
                ))}
              </select>

              <select
                className="w-full p-2 rounded-lg "
                value={feed.activityname}
                onChange={changeActName}
                name="activityname"
              >
                <option value="activityname" disabled selected>
                  -- Activity name --
                </option>
                {actName.map((actN, index) => (
                  <option key={index} value={actN.name}>
                    {actN.name}
                  </option>
                ))}
              </select>
              <input
                className="w-[50%] p-2 rounded-lg "
                type="number"
                placeholder="Duration"
                name="duration"
                value={feed.duration}
                onChange={handleChange}
                required
              />
              <label className="p-3 mt-3 font-bold">Minute</label>

              <textarea
                name="detail"
                onChange={handleChange}
                value={feed.detail}
                className=" w-full p-2 rounded-lg"
                placeholder="What's on your mind?"
                required
              />
            </div>

            <div className="m-2">
              <button className="p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]  hover:scale-110 duration-300">
                Post
              </button>
            </div>
          </div>
        </form>
      </div>
      {/* Post card */}
      <div className="lg:flex flex-col lg:mr-20 mr-3 ml-3">
        {data.activity.map((activity, index) => (
          <div
            key={index}
            className="lg:w-[100%] lg:mr-4 lg:mt-0 md:w-[600px] sm:w-[400px] mt-6 mx-auto p-4 bg-yellow-100 rounded-xl mb-4 shadow-xl"
          >
            <FeedSection
              handleRemove={() => handleRemove(activity._id)}
              userData={userData}
              id={activity._id}
              createAt={activity.createdAt}
              activityType={activity.activitytype}
              activityName={activity.activityname}
              detail={activity.detail}
              duration={activity.duration}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DiaryCard;
