import { useSelector } from "react-redux";

export default function OurTeams() {
  const { teams } = useSelector((state) => {
    return state.team;
  });

  return (
    <>
      <h1 className="text-[20px] text-[#3F4352] text-center mb-5 font-bold">
        Our Teams
      </h1>
      <div className="grid grid-cols-4 gap-5">
        {teams.map((team) => (
          <div className="w-[198px] h-[76px] flex items-center hover:opacity-70 hover:cursor-pointer">
            <img src={team.img} alt={team.name} />
            <div className=" ps-3">
              <p className="text-[#5B5D63] text-[12px]">{team.name}</p>
              <p className="text-[#9A9EA8] text-[11px]">{team.title}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
