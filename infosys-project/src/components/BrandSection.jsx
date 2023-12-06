import GroupeBrand from "../assets/Groupe.jpg";
import ESPRITBrand from "../assets/ESPRIT.jpg";
import ChanelBrand from "../assets/CHANEL.jpg";
import BurberryBrand from "../assets/BURBERRY.jpg";

export default function BrandSection() {
  const img = [
    {
      name: "Groupe Brand",
      img: GroupeBrand,
    },
    {
      name: "ESPRIT Brand",
      img: ESPRITBrand,
    },
    {
      name: "CHANEL Brand",
      img: ChanelBrand,
    },
    {
      name: "Burberry Brand",
      img: BurberryBrand,
    },
  ];

  return (
    <>
      {img.map((img) => (
        <img src={img.img} alt={img.name} />
      ))}
    </>
  );
}
