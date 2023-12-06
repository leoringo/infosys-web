import Diagram from "../assets/Diagram.png";

export default function MidSection() {
  return (
    <>
      <div className="w-[50%]">
        <img src={Diagram} alt="Diagram" className="w-[100%] h-[430.95px]" />
      </div>
      <div className="w-[50%]">
        <p className="my-5 text-[#8B919E]">Search Engine Optimization</p>
        <h1 className=" text-[40px] font-bold text-[#3F4352] max-w-[95%]">
          Improve Performance and Growth your Website
        </h1>
        <p className="my-5 text-[#8B919E] max-w-md">
          It's a theory of psychology that prioritizes the most fundamental
          human needs (​like air, water, and physical safety) over more advanced
          needs.
        </p>
        <button className="text-[#EE4E39] text-[16px] font-bold hover:underline">
          Explore Our SEO’s Strategies {">"}
        </button>
      </div>
    </>
  );
}
