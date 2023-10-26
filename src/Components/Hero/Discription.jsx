
import weight from '../../assets/hero/weight.jpg'

function Discription() {
  return (
    <div className='lg:container md:flex lg:justify-around  mb-2 mx-auto  '>
        <div className='flex justify-center my-6 mx-auto shadow-xl md:w-full lg:ml-4 w-full h-full rounded-xl ' >
            <img src={weight} 
            alt="Image-hero2" className='object-cover rounded-xl lg:w-full md:w-full w-3/4 h-auto '/>
        </div>
        <div className='flex flex-col justify-center mx-auto md:text-center text-center md:ml-3 w-full '>
            <h1 className='2xl:text-2xl xl:text-xl lg:text-md text-[1.2rem] md:text-sm lg:w-[100%]'>Work out Anywhere Anytime</h1>
            <p className='text-myGray font-poppins lg:text-md  2xl:text-lg text-[1rem] md:text-[1.2rem] lg:w-[100%]'>On Mobile, Teblet, Laptop, or your PC</p>
        </div>
    </div>
  );
}

export default Discription;
