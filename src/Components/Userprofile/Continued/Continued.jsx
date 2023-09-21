import Itemcon from './Itemcon'

const Continued = () => {

    const videos = [
        {
          id: 1,
          url: "https://www.youtube.com/watch?v=YLTnhWAG3hY",
          name: "vdo name 1",
        },
        {
          id: 2,
          url: "https://www.youtube.com/watch?v=AnotherVideoID",
          name: "vdo name 2",
        },
        {
          id: 3,
          url: "https://www.youtube.com/watch?v=AnotherVideoID",
          name: "vdo name 3",
        },
      ];

  return (
    <div className="text_button mt-5">
      <div className="lg:flex lg:items-center space-x-3 text-center w-full">
        <div className="w-[100%] lg:w-[40%] lg:text-end">
          <button className="text-xs bg-myGreen py-2 rounded-[12px] w-full">
            continued (recent activity type)
          </button>
          <p className="2xl:text-sm text-xs">recommend video</p>
        </div>

        <div className="space-y-5 mt-5 md:space-y-0 md:space-x-5 md:flex w-full md:w-[100%]">

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">
            {videos.map((video, index) => (
              <Itemcon key={index} video={video}/>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Continued
