import MarketingBackground from "../assets/Marketing Background.jpg";
import SearchEngineLogo from "../assets/Search Engine Optimization.jpg";
import SocialMediaLogo from "../assets/Social Media Organize.jpg";
import UIUXLogo from "../assets/UI & UX Design.jpg";
import GoogleAdsLogo from "../assets/Google Ads Optimization.jpg";
import ArrowCarousel from "../assets/Arrow Carousel.jpg";

export default function UpperSection() {
  const services = [
    { image: SocialMediaLogo, name: "Social Media Organize" },
    { image: UIUXLogo, name: "UI & UX Design" },
    { image: SearchEngineLogo, name: "Search Engine Optimization" },
    { image: GoogleAdsLogo, name: "Google Ads Optimization" },
  ];

  return (
    <>
      <div>
        <div className="h-[25%] border-r border-gray-300 mx-4 mb-10"></div>
        <div className=" text-center mb-3 mt-3 space-y-5">
          <p className="text-[#9A9EA8]">YT</p>
          <p className="text-[#9A9EA8]">IG</p>
          <p className="text-[#EE4E39] border-b-[1.5px] border-[#EE4E39]">TW</p>
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
          <h1 className="font-extrabold text-[44px] text-[#3F4352]">AGENCY</h1>
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
          {services.map((service) => (
            <div className="w-[206px] h-[63px] top-[111px] bg-white left-[784px] rounded-lg flex items-center">
              <img src={service.image} alt={service.name} className="ms-3" />
              <p className="text-[11px] ms-2">{service.name}</p>
            </div>
          ))}
        </div>
        <img src={ArrowCarousel} alt="" />
      </div>
    </>
  );
}
