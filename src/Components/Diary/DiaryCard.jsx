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
        setFeed({
            ...feed,
            [even.target.name] : even.target.value 
          }) 
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

      /* const handleUpdate = async (id,data) => {
        console.log(id,data);
        update(id,feed)
            .then(res => {
            console.log(res.data);
            loadData();
          })
          .catch((err) => console.log(err));
      } */
      console.log(data);

  return (
    <>
        {/* Mobile */}
        <form onSubmit={handleSubmit} className='max-w-[300px] mx-auto p-4 bg-yellow-100 rounded-xl lg:hidden'>
            <div className='flex flex-col items-center '>
                <img className='rounded-full w-48 h-48' src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='Your Avatar' />
            </div>
            <h1 className='text-center font-bold text-sm'>Alex Mccarl</h1>
            <div className='p-2'>
                {/* <label className='flex justify-center items-center pb-2'>Choose an activity</label> */}
                <select className='w-full p-2 rounded-lg' value={activityType} name='activitytype' onChange={changeActType}>
                    <option value='activity' name='activitytype'>-- Activity type --</option>
                    {activities.map((actT,index) => (
                        <option key={index} value={actT.actType}>{actT.actType}</option>
                    ))}
                </select>


                <input className='p-2 rounded-lg mt-2 w-3/5 ' type="number" placeholder='Duration' value={feed.duration} name='duration' onChange={handleChange}/>
                <label className='p-1 font-bold mx-3'>Minute</label>

                <textarea
                className='mt-2 w-full p-2 rounded-lg'
                placeholder="What's on your mind?"
                value={feed.detail} 
                name='detail'
                onChange={handleChange}
                ></textarea>
            
            </div>
            <div className='m-2'>
                <button className='p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]'>Post</button>
            </div>
        </form>
        <div className='max-w-[300px] mx-auto mt-8 p-4 bg-yellow-100 rounded-xl lg:hidden'>
            <FeedSection />
        </div>

        {/* Desktop */}
        <div className='hidden lg:block'>
            <div className='flex flex-col items-center '>
                <form onSubmit={handleSubmit} className='w-[700px] flex mx-4 p-2 bg-yellow-100 rounded-xl'>
                    <div className='text-center w-[50%] text-xs'>
                        <img className='rounded-full w-[50%] mx-auto ' src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg' alt='Your Avatar' />
                        <h1 className='font-bold  m-2'>Alex Mccarl</h1>
                        {/* <label className=' m-2'>Choose an activity</label> */}
                    </div>
                    <div className='p-2 flex flex-wrap mx-2' name='Activity type'>
                        <div className='flex justify-between w-full'>
                            <select className='w-[50%]  p-2 rounded-lg m-2' value={feed.activitytype} onChange={changeActType} name='activitytype'>
                                <option value='activitytype' selected >-- Activity type --</option>
                                {activities.map((actT,index) => (
                                    <option  key={index} value={actT.actType}> {actT.actType}</option>
                                ))}
                            </select>

                            <select className='w-[50%] p-2 rounded-lg m-2' value={feed.activityname} onChange={changeActName} name='activityname'>
                                <option value='activityname' disabled selected>-- Activity name --</option>
                                {actName.map((actN,index) => (
                                    <option key={index} value={actN.name}> {actN.name} </option>
                                ))}
                            </select>
                        </div>
                        <input className='p-2 rounded-lg m-2' type="number" placeholder='Duration' name='duration' value={feed.duration} onChange={handleChange}/>
                        <label className='p-1 mt-3 font-bold'>Minute</label>
                        
                        <textarea
                        name='detail'
                        onChange={handleChange}
                        value= {feed.detail}
                        className='m-2 w-full p-2 rounded-lg'
                        placeholder="What's on your mind?"/>

                        <div className='m-2'>
                            <button className='p-2 rounded-2xl hover:text-[#fff565] bg-[#9ffc41]'>Post</button>
                        </div>
                    </div>
                </form>
                {data.activity.map((activity, index) => (
                <div key={index} className='w-[700px] my-8 p-4 bg-yellow-50 rounded-xl hidden lg:block'>
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
    </>
  )
}


export default DiaryCard