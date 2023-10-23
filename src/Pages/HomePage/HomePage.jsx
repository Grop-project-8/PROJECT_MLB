import Discription from "../../Components/Hero/Discription"
import HomeSignup from "../../Components/Hero/HomeSignup"
import Activity from "../../Components/Avtivities/Activity";
import VideoGellery from '../videoGellery/videoGellery'

import Home from "../../Components/Hero/Home";

function HomePage() {
  return (
    <>
    <Home/>
    <Discription/>
    <HomeSignup/>
    <Activity />
    <VideoGellery/>
    </>
  )
}

export default HomePage;
 