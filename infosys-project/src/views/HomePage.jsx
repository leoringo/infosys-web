import MarketingBackground from "../assets/Marketing Background.jpg";
import CoverLaptop from "../assets/Rectangle 8.jpg";
import SearchEngineLogo from "../assets/Search Engine Optimization.jpg";
import SocialMediaLogo from "../assets/Social Media Organize.jpg";
import UIUXLogo from "../assets/UI & UX Design.jpg";
import GoogleAdsLogo from "../assets/Google Ads Optimization.jpg";
import ArrowCarousel from "../assets/Arrow Carousel.jpg";
import GroupeBrand from "../assets/Groupe.jpg";
import ESPRITBrand from "../assets/ESPRIT.jpg";
import ChanelBrand from "../assets/CHANEL.jpg";
import BurberryBrand from "../assets/BURBERRY.jpg";
import BackgroundDiagram from "../assets/Background Diagram.jpg";
import FrontIcon from "../assets/Icon Front.jpg";
import SEOService from "../assets/SEOService.jpg";
import SMOService from "../assets/SMOService.jpg";
import UXService from "../assets/UXService.jpg";
import CMService from "../assets/CMService.jpg";
import AdsService from "../assets/AdsService.jpg";

export default function HomePage() {
  return (
    <>
      {/* ====================DIGITAL MARKETING SECTION==================== */}
      <div className="h-[533px] w-[1493.78px] top-[197px] left-[63px] flex justify-evenly">
        <div>
          <div className="h-[25%] border-r border-gray-300 mx-4 mb-10"></div>
          <div className=" text-center mb-3 mt-3 space-y-5">
            <p className="text-[#9A9EA8]">YT</p>
            <p className="text-[#9A9EA8]">IG</p>
            <p className="text-[#EE4E39] border-b-[1.5px] border-[#EE4E39]">
              TW
            </p>
            <p className="text-[#9A9EA8]">FB</p>
          </div>
          <div className="h-[25%] border-r border-gray-300 mx-4 mt-10"></div>
        </div>
        <div className="flex flex-col ms-44 justify-center">
          <div className=" text-[#EE4E39]">PT. Digital Media Nusantara</div>
          <div>
            <h1 className="font-extrabold text-[44px]  text-[#3F4352]">
              DIGITAL MARKETING
            </h1>
            <h1 className="font-extrabold text-[44px] text-[#3F4352]">
              AGENCY
            </h1>
          </div>
          <div className=" text-[#8B919E] w-[500px] max-w-[60%] mt-3">
            <p>
              We examine the top of funnel to figure out how to make people to a
              subscribe newsletter then turn prospects into leads.
            </p>
          </div>
          <div className="flex space-x-5 mt-6">
            <div>
              <button className="btn bg-[#EE4E39] text-white w-[121px] h-[44px] rounded-md hover:opacity-80">
                Contact Us
              </button>
            </div>
            <div>
              <button className="btn w-[105px] text-[#EE4E39] h-[26px] mt-2 hover:opacity-80 hover:underline">
                Our pricing →
              </button>
            </div>
          </div>
        </div>
        <div className=" w-[75%] bg-cover bg-center relative">
          <img
            src={MarketingBackground}
            alt="MarketingBackground"
            className="w-full h-full object-cover object-center inset-0"
          />
          <div className="absolute inset-0 flex flex-col items-start justify-center ms-10 gap-5 ">
            <div className="w-[206px] h-[63px] top-[111px] bg-white left-[784px] rounded-lg flex items-center">
              <img src={SocialMediaLogo} alt="" className="ms-3" />
              <p className="text-[11px] ms-2">Social Media Organize</p>
            </div>
            <div className="w-[206px] h-[63px] top-[111px] bg-white left-[784px] rounded-lg flex items-center">
              <img src={UIUXLogo} alt="" className="ms-3" />
              <p className="text-[11px] ms-2">UI & UX Design</p>
            </div>
            <div className="w-[206px] h-[63px] top-[111px] bg-white left-[784px] rounded-lg flex items-center">
              <img src={SearchEngineLogo} alt="" className="ms-3" />
              <p className="text-[11px] ms-2">Search Engine Optimization</p>
            </div>
            <div className="w-[206px] h-[63px] top-[111px] bg-white left-[784px] rounded-lg flex items-center">
              <img src={GoogleAdsLogo} alt="" className="ms-3" />
              <p className="text-[11px] ms-2">Google Ads Optimization</p>
            </div>
          </div>
          <img src={ArrowCarousel} alt="" />
        </div>
      </div>

      {/* ====================BRAND LOGO SECTION====================*/}
      <div className="flex mt-36 gap-10 h-10 mb-[10%]">
        <img src={GroupeBrand} alt="" />
        <img src={ESPRITBrand} alt="" />
        <img src={BurberryBrand} alt="" />
        <img src={ChanelBrand} alt="" />
      </div>

      {/* ====================SEARCH ENGINE OPTIMIZATION SECTION====================*/}
      <div className="w-[990px] h-[430.95px] top-[1090px] left-[272px] mb-[10%] flex">
        <div className="w-[50%]">
          {/* <img
            src={BackgroundDiagram}
            alt=""
            className="object-cover object-center absolute inset-0"
          /> */}
          <img src={FrontIcon} alt="" className="w-[184px] h-[430.95px]" />
        </div>
        <div className="w-[50%]">
          <p className="my-5 text-[#8B919E]">Search Engine Optimization</p>
          <h1 className=" text-[40px] font-bold text-[#3F4352] max-w-[95%]">
            Improve Performance and Growth your Website
          </h1>
          <p className="my-5 text-[#8B919E] max-w-md">
            It's a theory of psychology that prioritizes the most fundamental
            human needs (​like air, water, and physical safety) over more
            advanced needs.
          </p>
          <button className="text-[#EE4E39] text-[16px] font-bold hover:underline">
            Explore Our SEO’s Strategies {">"}
          </button>
        </div>
      </div>

      {/* ====================OUR SERVICES SECTION====================*/}
      <div className="w-[888px] h-[671px] flex flex-col items-center">
        <h1 className="text-[#3F4352] text-[24px]">Our Services</h1>
        <p className="text-center max-w-[50%] my-5 text-[#8B919E]">
          Increase your linkability, make tagging and bookmarking easy. Reward
          inbound links
        </p>
        <div className="w-[888px] h-[191px] mt-10 flex gap-5 ">
          <div className="w-[280px] h-[180px] flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
            <img src={SEOService} alt="" className="w-12 h-12 mb-5" />
            <p className="text-[16px] text-[#3F4352]">
              Search Engine Optimization
            </p>
          </div>
          <div className="w-[280px] h-[180px] flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
            <img src={SMOService} alt="" className="w-12 h-12 mb-5" />
            <p className="text-[16px] text-[#3F4352]">
              Social Media Optimization
            </p>
          </div>
          <div className="w-[280px] h-[180px] flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
            <img src={UXService} alt="" className="w-12 h-12 mb-5" />
            <p className="text-[16px] text-[#3F4352]">UX Writer</p>
          </div>
        </div>
        <div className="w-[584px] h-[180px] flex gap-6">
          <div className="w-[280px] h-[180px] flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
            <img src={CMService} alt="" />
            <p className="text-[16px] text-[#3F4352]">Content Management</p>
          </div>
          <div className="w-[280px] h-[180px] flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
            <img src={AdsService} alt="" />
            <p className="text-[16px] text-[#3F4352]">Ads Optimization</p>
          </div>
        </div>
      </div>

      <div>Our Teams</div>
    </>
  );
}
