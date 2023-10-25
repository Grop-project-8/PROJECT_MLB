import hero2 from '../../assets/hero/hero2.svg'
import weight from '../../assets/hero/weight.svg'

function Discription() {
  return (
    <div className='lg:container lg:flex lg:justify-around  mb-3 mx-auto mt-2 '>
        <div className='my-6 mx-auto shadow-xl md:w-[70%] lg:ml-4' >
            <img src={weight} 
            loading='lazy'
            alt="Image-hero2" className='rounded-xl  '/>
        </div>

        <div className='flex flex-col justify-center mx-auto md:text-center text-center md:ml-3 w-full '>
            <h1 className='2xl:text-2xl xl:text-xl lg:text-md text-[1.2rem] md:text-sm lg:w-[100%]'>Work out Anywhere Anytime</h1>
            <p className='text-myGray font-poppins lg:text-sm  2xl:text-lg text-[1rem] md:text-[1.2rem] lg:w-[100%]'>On Mobile, Teblet, Laptop, or your PC</p>
        </div>
    </div>
  );
}

export default Discription;
