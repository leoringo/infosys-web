import Logo from "../assets/Logo.jpg";
import RightMenu from "../assets/Right Menu.jpg";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const styleLink = {
    active: "border-b-2 border-orange-500",
    notActive: "hover:text-orange-500 text-gray-500",
  };

  return (
    <>
      <nav className="flex justify-evenly mt-5 items-center w-full h-[33px] top-[32px] left-[280px]">
        <img src={Logo} alt="DigiXine Logo" />
        <div className="flex items-center space-x-5 gap-7 justify-center">
          <NavLink
            to={"/"}
            className={({ isActive }) =>
              isActive ? styleLink.active : styleLink.notActive
            }
          >
            Home
          </NavLink>
          <NavLink
            to={"/about"}
            className={({ isActive }) =>
              isActive ? styleLink.active : styleLink.notActive
            }
          >
            About
          </NavLink>
          <NavLink
            to={"/services"}
            className={({ isActive }) =>
              isActive ? styleLink.active : styleLink.notActive
            }
          >
            Services
          </NavLink>
          <NavLink
            to={"/portfolio"}
            className={({ isActive }) =>
              isActive ? styleLink.active : styleLink.notActive
            }
          >
            Portfolio
          </NavLink>
          <NavLink
            to={"/blog"}
            className={({ isActive }) =>
              isActive ? styleLink.active : styleLink.notActive
            }
          >
            Blog
          </NavLink>
          <NavLink
            to={"/support"}
            className={({ isActive }) =>
              isActive ? styleLink.active : styleLink.notActive
            }
          >
            Support
          </NavLink>
        </div>
        <img src={RightMenu} alt="RightMenu Logo" />
      </nav>
    </>
  );
}
