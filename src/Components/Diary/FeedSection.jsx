import { GrFormClose } from 'react-icons/gr';
import { BiSolidEditAlt } from 'react-icons/bi';

const FeedSection = ({activityType,activityName,detail,duration,createAt,id,handleRemove}) => {

  return (
    <div>
      <div className='flex m-1'>
        <img
          className='rounded-full h-12 w-18'
          src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
          alt='User 1'
        />
        <div className='mx-2'>
          <h3 className='font-bold'>username</h3>
          <p className='text-[12px]'>{createAt}</p> 
        </div>
          <div >
            <div className='ml-auto'>
              <button><BiSolidEditAlt size={20} /></button>
              <GrFormClose size={20} onClick={handleRemove} />
            </div>
            <p>Activity type: {activityType}</p>
            <p>Activity name: {activityName}</p>
            <p>Duration: {duration} minutes</p>
            <p>{detail}</p>
          </div>
      </div>
    </div>
  );
};

export default FeedSection;
