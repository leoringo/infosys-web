import { useEffect, useState } from "react";
import UpperSection from "../components/UpperSection";
import BrandSection from "../components/BrandSection";
import MidSection from "../components/MidSection";
import OurTeams from "../components/OurTeams";
import OurServices from "../components/OurServices";

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      {/* ====================DIGITAL MARKETING SECTION==================== */}
      <div className="h-[533px] w-[1493.78px] top-[197px] left-[63px] flex justify-evenly">
        <UpperSection />
      </div>

      {/* ====================BRAND LOGO SECTION====================*/}
      <div className="flex mt-36 gap-10 h-10 mb-[10%]">
        <BrandSection />
      </div>

      {/* ====================SEARCH ENGINE OPTIMIZATION SECTION====================*/}
      <div className="w-[990px] h-[430.95px] top-[1090px] left-[272px] mb-[10%] flex">
        <MidSection />
      </div>

      {/* ====================OUR SERVICES SECTION====================*/}
      <div className="w-[888px] flex flex-col items-center">
        <OurServices />
      </div>

      {/* ====================OUR TEAMS SECTION====================*/}
      <div className="w-[876px] h-[246px]">
        <OurTeams />
      </div>
    </>
  );
}
