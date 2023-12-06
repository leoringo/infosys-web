import GroupeBrand from "../assets/brandImages/Groupe.jpg";
import ESPRITBrand from "../assets/brandImages/ESPRIT.jpg";
import ChanelBrand from "../assets/brandImages/CHANEL.jpg";
import BurberryBrand from "../assets/brandImages/BURBERRY.jpg";

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
