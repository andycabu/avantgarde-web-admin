import { useEffect, useState, useRef } from "react";
import { LOGO } from "../constants/constants";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const links = [
    {
      id: 1,
      name: "Inicio",
      path: "/",
    },
    {
      id: 2,
      name: "Propiedades",
      path: "/propiedades",
    },
    {
      id: 3,
      name: "Nuestra zona",
      path: "/#zona",
    },
    {
      id: 4,
      name: "Metodo",
      path: "/#metodo",
    },
    {
      id: 5,
      name: "Nosotros",
      path: "/#nosotros",
    },
    {
      id: 6,
      name: "Filosofia",
      path: "/#mision-vision",
    },

    {
      id: 7,
      name: "Compradores",
      path: "/#compradores",
    },

    {
      id: 8,
      name: "Contacto",
      path: "/#contacto",
    },
  ];
  const navRef = useRef();
  const location = useLocation();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isOpen]);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [location]);

  return (
    <nav className="flex justify-between items-center" ref={navRef}>
      <Link to="/">
        <img src={LOGO} alt="logo" />
      </Link>
      <div>
        <ul
          className={`flex flex-col ${
            isOpen ? "block" : "hidden"
          } fixed top-0 right-0 bg-[#122860] pt-12 px-8 pb-4 z-40 overflow-y-auto h-[calc(100vh)]`}
        >
          <IoCloseSharp
            className="block text-white text-[30px] cursor-pointer absolute top-4 right-4"
            onClick={() => setOpen(false)}
          />
          {links.map((link) => (
            <li
              key={link.id}
              className="text-white text-[20px] cursor-pointer mb-4 hover:bg-[#3e6f88]"
              onClick={() => setOpen(false)}
            >
              <Link className="h-full block p-4" to={link.path}>
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <div
        className="block cursor-pointer fixed right-4 top-4 z-30"
        onClick={() => setOpen(!isOpen)}
        style={{
          position: "fixed",
          right: "1rem",
          top: "1rem",
          zIndex: "30",
        }}
      >
        <GiHamburgerMenu className="text-white text-[24px]" />
      </div>
    </nav>
  );
};

export default Navbar;
