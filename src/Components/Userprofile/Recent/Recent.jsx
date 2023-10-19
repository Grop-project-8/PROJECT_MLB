import ItemRecent from "./ItemRecent";

const Recent = () => {

  const videos = [
    {
      id: 1,
      url: "",
      name: "vdo name 1",
    },
    {
      id: 2,
      url: "",
      name: "vdo name 2",
    },
    {
      id: 3,
      url: "",
      name: "vdo name 3",
    },
    
  ];

  return (
    <div>
      <div className="before dashboard">
        <div className="mt-5">
          <h2 className="2xl:text-2xl xl:text-xl lg:text-lg text-sm">
            Recent activity
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-5 mt-5">

            {videos.map((video) => (

              <ItemRecent key={video.id} video={video} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Recent;
