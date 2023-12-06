import SEOService from "../assets/SEOService.jpg";
import SMOService from "../assets/SMOService.jpg";
import UXService from "../assets/UXService.jpg";
import CMService from "../assets/CMService.jpg";
import AdsService from "../assets/AdsService.jpg";

export default function OurServices() {
  const service1 = [
    { name: "Search Engine Optimization", img: SEOService },
    { name: "Social Media Optimization", img: SMOService },
    { name: "UX Writer", img: UXService },
  ];

  const service2 = [
    { name: "Content Management", img: CMService },
    { name: "Ads Optimization", img: AdsService },
  ];
  return (
    <>
      <h1 className="text-[#3F4352] text-[24px]">Our Services</h1>
      <p className="text-center max-w-[50%] my-5 text-[#8B919E]">
        Increase your linkability, make tagging and bookmarking easy. Reward
        inbound links
      </p>
      <div className="w-[888px] h-[191px] mt-10 flex gap-5 ">
        {service1.map((service) => (
          <div className="w-[280px] h-[180px] flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
            <img
              src={service.img}
              alt={service.name}
              className="w-12 h-12 mb-5"
            />
            <p className="text-[16px] text-[#3F4352]">{service.name}</p>
          </div>
        ))}
      </div>
      <div className="w-[584px] h-[180px] flex gap-6">
        {service2.map((service) => (
          <div className="w-[280px] h-[180px] flex flex-col items-center hover:opacity-70 hover:cursor-pointer">
            <img src={service.img} alt={service.name} />
            <p className="text-[16px] text-[#3F4352]">{service.name}</p>
          </div>
        ))}
      </div>
    </>
  );
}
