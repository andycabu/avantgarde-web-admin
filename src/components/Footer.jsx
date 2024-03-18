import { Link } from "react-router-dom";
import { LOGO } from "../constants/constants";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
const Footer = () => {
  return (
    <footer className="w-full py-8  bg-[#122860] text-white text-center p-4 footer ">
      <div className="flex flex-col items-center pt-4">
        <div className="pt-4">
          <img className="w-[200px] pt-4" src={LOGO} alt="logo" />
        </div>

        <div className="flex flex-col text-[14px] pb-6">
          <span className="mt-16">Nuestra oficina:</span>
          <span>
            Carrer Joan Maragall, 4-6, Pallejà (
            <Link className="hover:text-[#3e6f88]">Ver mapa</Link>)
          </span>

          <Link className="mt-6 hover:text-[#3e6f88]">93 128 77 18</Link>
          <Link className="hover:text-[#3e6f88]">
            info@avantgarde-inmobiliaria.es
          </Link>
        </div>
        <div className="text-white text-[12px] border-t-[1px] border-[rgba(255, 255, 255, 0.1)] pt-6">
          <span>© 2024 AVANTGARDE INMOBILIARIA</span> -{" "}
          <Link className="hover:text-[#3e6f88]">Aviso Legal</Link> -{" "}
          <Link className="hover:text-[#3e6f88]">Política de privacidad</Link> -{" "}
          <Link className="hover:text-[#3e6f88]">
            protección de datos y Política de Cookies
          </Link>
        </div>
        <span>¡SÍGUENOS!</span>
        <div className="flex gap-4 pt-4">
          <FaFacebookF size={30} />
          <FaInstagram size={30} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
