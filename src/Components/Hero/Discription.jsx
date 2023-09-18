import hero2 from '../../assets/hero/hero2.svg'

function Discription() {
  return (
    <div className='lg:container lg:flex lg:justify-around  md:object-cover'>
        <div className='my-6 mx-auto ' >
            <img src={hero2} alt="Image-hero2" className='rounded-lg md:w-full'/>
        </div>

        <div className='flex flex-col justify-center mx-auto md:text-center'>
            <h1 className='text-3xl'>Description for this webiste</h1>
            <p className='text-2xl '>The quick brown fox jumps over the lazy dog</p>
        </div>
    </div>
  )
}

export default Discription