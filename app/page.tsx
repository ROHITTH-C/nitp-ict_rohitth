import Slider from "./components/Home/Slider";
import Announcement from './components/Home/Announcement';
import Main from './components/Home/page';
// import Gallery from "./components/Home/Gallery";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-row w-full max-w-[1100px] mx-auto p-2">
        {/* Slider Section */}
        <div className="mt-2 sm:w-2/3 w-full">
          <Slider />
        </div>

        {/* Announcement Section */}
        <div className="mt-2 sm:ml-2 sm:w-1/3 w-full">
          <Announcement />
        </div>
      </div>

      {/* Main Section */}
      <div className="p-2">
        <Main />
      </div>
    </>
  );
}
