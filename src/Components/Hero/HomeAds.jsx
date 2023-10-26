import Bmi from '../../assets/hero/icons8-bmi-80.png'
import Dashborad from '../../assets/hero/icons8-chart-64.png'
import History from '../../assets/hero/icons8-history-64.png'

function HomeAds() {
  return (
    <div className="container grid grid-cols-3 max-[639px]:flex flex-col  sm:bg-yellow-50 xl:h-[250px] lg:h-[190px] md:h-[150px] md:w-full lg:w-full items-center md:shadow-xl max-[639px]:mb-10 max-[639px]:mt-10  mb-10">
        <div className=' flex items-center justify-center lg:space-x-6 md:border-r-2 md:pl-3 lg:pr-2 md:border-gray-950 sm:space-x-3 max-[639px]:space-x-3 max-[639px]:w-[80%] max-[639px]:mb-3 max-[639px]:mx-auto max-[639px]:shadow-xl'>
            <img src={Bmi} alt="BMI-img" className='w-[60px] lg:w-[55%]' />
            <div className='flex flex-col'>
             <p className='lg:text-[2rem] md:text-[18px] text-[14px]'>BMI</p>
             <p className='text-myGray xl:text-[1.8rem] md:text-[16px] lg:text-[1.3rem] max-[639px]:text-[13px]'>Calculate BMI efficiently and Check your health.</p>
             </div>
        </div>


        <div className=' flex items-center justify-center md:space-x-4 sm:space-x-3 md:pl-2 lg:pr-3 space-x-3 sm:border-r-2 md:border-gray-950 max-[639px]:mb-3 max-[639px]:w-[80%] max-[639px]:mt-6 max-[639px]:mx-auto max-[639px]:shadow-xl'>
            <img src={Dashborad} alt="Dashborad-img" className='w-[60px] lg:w-[55%]'  />
            <div className='flex flex-col'>
             <p className='lg:text-[2rem] md:text-[18px] text-[14px]'>Dashboard</p>
             <p className='text-myGray xl:text-[1.8rem] md:text-[16px] lg:text-[1.3rem] max-[640px]:text-[13px]'>Help you set goals and follow exercise results.</p>
             </div>
        </div >

        <div className=' flex items-center justify-center lg:space-x-6 md:space-x-3 lg:pr-2 xl:pr-3 md:pl-3 space-x-3 sm:pl-4  sm:mx-auto max-[639px]:shadow-xl max-[639px]:w-[80%] max-[639px]:mt-6'>
            <img src={History} alt="History-img"  className='w-[55px] lg:w-[50%]' />
            <div className='flex flex-col'>
             <p className='lg:text-[2rem] md:text-[18px] text-[14px]'>History</p>
             <p className='flex text-myGray xl:text-[1.8rem] md:text-[16px] lg:text-[1.3rem] max-[640px]:text-[13px]'>Check activity and achieve your exercise history.</p>
             </div>
        </div>
    </div>
  )
}


export default HomeAds