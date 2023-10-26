import Discription from "../../Components/Hero/Discription"
import HomeSignup from "../../Components/Hero/HomeSignup"
import Activity from "../../Components/Avtivities/Activity";
import HomeAds from "../../Components/Hero/HomeAds"
import Home from "../../Components/Hero/Home";
import Footer from "../../Components/Layout/Footer";

function HomePage() {
  return (
    <>
    <Home/>
    <HomeAds/>
    <Discription/>
    <Activity />
    <HomeSignup/>
    <Footer/>
    </>
  )
}

export default HomePage;