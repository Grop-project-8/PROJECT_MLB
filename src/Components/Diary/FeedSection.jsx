import { GrFormClose } from 'react-icons/gr'
import { BiSolidEditAlt } from 'react-icons/bi'
const FeedSection = () => {
    return (
        <div>
            <div className='flex m-1'>
                <img
                className='rounded-full h-12 w-18 ' 
                src='https://img.freepik.com/premium-vector/young-smiling-man-avatar-man-with-brown-beard-mustache-hair-wearing-yellow-sweater-sweatshirt-3d-vector-people-character-illustration-cartoon-minimal-style_365941-860.jpg'
                alt='User 1'
                />
                <div className='mx-2'>
                    <h3 className='font-bold'>Alex Mccarl</h3>
                    <p className='text-[12px]'>2 hours ago</p>
                </div>
                <div className='ml-auto'>
                    <button><BiSolidEditAlt size={20}/></button>
                    <button><GrFormClose size={20}/></button>
                </div>
            </div>
            <p>Activity type</p>
            <p>Activity name</p>
            <p>20 minutes</p>
            <p>I will eat icecream twice after exercise! 🎉</p>
        </div>
    );
  };

  export default FeedSection