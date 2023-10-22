import { activities } from './actMockData.js'
import FeedSection from './FeedSection'
import { useEffect, useState } from "react";
import { create,removed  } from "../../Function/activity";
import { getuser } from "../../Function/userRouter";

const DiaryCard = () => {
    const [activityType, setActivityType] = useState('')
    const [activityName, setActivityName] = useState('')
    const [actName, setActName] = useState([])

    const [data, setData] = useState({ username: '', activity: [] });

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    getuser()
      .then((res) => setData(res.data))
      .catch((err) => console.log(err));
  };
    
    const [feed, setFeed] = useState({
        activitytype:activityType ,
        activityname:'' ,
        detail:'' , 
        duration:''
    })

    const handleChange = (e) => {
        setFeed({
          ...feed,
          [e.target.name] : e.target.value 
        })   
      } 

    const changeActType = (even) => {
        setActivityType(even.target.value)
        setActName(activities.find( actT => actT.actType === even.target.value).actName)
        setFeed({
            ...feed,
            [even.target.name] : even.target.value 
          })   
    }

    const changeActName = (even) => {
        setActivityName(even.target.value)
    }

    /* console.log("detail :",detail,"duration :",duration,"Type : ",activityType,"Name :",activityName);
 */
    const handleSubmit = async (e) => {
        e.preventDefault();
        create(feed)  // จะรับข้อมูลที่ Submit มาจาก Form 
        .then(res => {
          console.log(res.data);
          loadData()
        })
        .catch((err) => console.log(err));
      }

      const handleRemove = async (id) => {
        console.log(id);
        removed(id)
          .then(res => {
            console.log(res.data);
            loadData();
          })
          .catch((err) => console.log(err));
      };

  return (
    <div className='lg:grid grid-cols-3 gap-[350px]'>
        {/* Post */}
        <div className=' mx-auto'>
            <form onSubmit={handleSubmit} className='w-[300px] lg:w-[300px]  lg:sticky top-0 lg:ml-[150px] md:w-[400px] sm:w-[400px]  mx-auto p-4 bg-yellow-100 rounded-xl flex flex-col items-center'>
                <div className='text-center w-[50%] text-xs'>
                    <img className='rounded-full w-[60%] mx-auto ' src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='Your Avatar' />
                </div>
                    <h1 className='font-bold  m-2'>Alex Mccarl</h1>
                    <label className='m-2'>Choose an activity</label>
                <div className='flex flex-wrap' name='Activity type'>
                    <div className='space-y-2'>
                        <select className='w-full p-2 rounded-lg' value={feed.activitytype} onChange={changeActType} name='activitytype'>
                            <option value='activitytype' selected  >-- Activity type --</option>
                            {activities.map((actT,index) => (
                                <option  key={index} value={actT.actType}>{actT.actType}</option>
                            ))}
                        </select>

                        <select className='w-full p-2 rounded-lg ' value={feed.activityname} onChange={handleChange} name='activityname'>
                            <option value='activityname' disabled selected  >-- Activity name --</option>
                            {actName.map((actN,index) => (
                                <option key={index} value={actN.name}>{actN.name}</option>
                            ))}
                        </select>
                        <input className='w-[50%] p-2 rounded-lg ' type="number" placeholder='Duration' name='duration' value={feed.duration} onChange={handleChange} required/>
                        <label className='p-3 mt-3 font-bold'>Minute</label>
                        
                        <textarea
                        name='detail'
                        onChange={handleChange}
                        value= {feed.detail}
                        className=' w-full p-2 rounded-lg'
                        placeholder="What's on your mind?"
                        required/>
                    </div>

                    <div className='m-2'>
                        <button className='p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]  hover:scale-110 duration-300'>Post</button>
                    </div>
                </div>
            </form>
        </div>
        {/* Post card */}
        <div className='lg:flex flex-col lg:mr-20'>
            {data.activity.map((activity, index) => (
                <div key={index} className='w-[300px] lg:w-[550px] lg:mt-0 md:w-[400px] sm:w-[400px] mt-6 mx-auto p-4 bg-yellow-100 rounded-xl mb-4 '>
                    <FeedSection 
                    handleRemove={() => handleRemove(activity._id)} 
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
  )
}


export default DiaryCard