import Slider from "./components/Home/Slider";
import Announcement from "./components/Home/Announcement";
import UpProgram from "./components/Home/UpProgram";
import Current from "./components/Home/Current";
import Compete from "./components/Home/Compete";
import Gallery from "./components/Home/Gallery";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';



export default function Home() {
  return (
    <>
     <Slider/>
    <Announcement/>
    <UpProgram/>
    <Current/>
    <Compete/>
    <Gallery/>
    
    </>
    
  );
}

