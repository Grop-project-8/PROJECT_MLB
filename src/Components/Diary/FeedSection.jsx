import { GrFormClose } from 'react-icons/gr';
import { BiSolidEditAlt } from 'react-icons/bi';

const FeedSection = ({activityType,activityName,detail,duration,createAt,id,handleRemove}) => {

  return (
  <div>
    <div className='flex'>
        <div className='w-[60px] md:w-[60px] sm:w-[60px]'>
        <img
            className='w-full rounded-full'
            src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
            alt='User 1'
          />
        </div>
        <div className='mx-2'>
          <h3 className='font-bold'>username</h3>
          <p className='text-[12px]'>{createAt}</p> 
        </div>
        <div className='ml-auto flex items-center'>
            <button><BiSolidEditAlt size={20} /></button>
            <GrFormClose className='hover: cursor-pointer scale-500 duration-300' size={30} onClick={handleRemove} />
        </div>
    </div>
    <div>
      <p>Activity type: {activityType}</p>
      <p>Activity name: {activityName}</p>
      <p>Duration: {duration} minutes</p>
      <p className='bg-white w-full p-2 rounded-[10px] break-words'>
        {detail}
      </p>
    </div>
  </div>
  );
};

export default FeedSection;
