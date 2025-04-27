// import Announcement from './Announcement';
import Compete from './Compete';
import Current from './Current';
import UpProgram from './UpProgram';
import Gallery from './Gallery';

export default function Main() {
  return (
    <>
      {/* First Row */}
      <div className="mt-3 flex flex-col sm:flex-row w-full max-w-[1090px] items-center justify-around mx-auto">
        {/* <Current />
        <Compete /> */}
      </div>

      {/* Second Row */}
      <div className="mt-3 flex flex-col sm:flex-row w-full max-w-[1090px] items-center justify-around mx-auto">
        {/* <Gallery />
        <UpProgram /> */}
      </div>
    </>
  );
}
