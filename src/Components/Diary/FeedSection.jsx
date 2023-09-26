import { GrFormClose } from 'react-icons/gr'
import { BiSolidEditAlt } from 'react-icons/bi'
const FeedSection = () => {
    return (
        <div>
            <div >
            <div class='max-w-[300px] flex'>
                <img
                class='h-12 w-18 rounded-full' 
                src='https://png.pngtree.com/png-clipart/20230511/ourmid/pngtree-isolated-cat-on-white-background-png-image_7094927.png'
                alt='User 1'
                />
                <div className='mx-2'>
                    <h3 className='font-bold'>かわいい猫</h3>
                    <p className='text-[12px]'>2 hours ago</p>
                </div>
                <div className='ml-auto'>
                    <button><BiSolidEditAlt size={20}/></button>
                    <button><GrFormClose size={20}/></button>
                </div>
            </div>
            <p>Yoga</p>
            <p>I will eat icecream twice after exercise! 🎉</p>
            </div>
        </div>
    );
  };

  export default FeedSection