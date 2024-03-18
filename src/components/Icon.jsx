import PropTypes from "prop-types";
import { IoBedOutline, IoHomeOutline } from "react-icons/io5";
import { LuBath } from "react-icons/lu";
import { TfiRulerAlt2 } from "react-icons/tfi";

const Icon = ({ name }) => {
  switch (name) {
    case "beds":
      return <IoBedOutline className="text-[24px] text-[#11275f]" />;
    case "baths":
      return <LuBath className="text-[24px] text-[#11275f]" />;
    case "houseSize":
      return <IoHomeOutline className="text-[24px] text-[#11275f]" />;
    case "lotSize":
      return <TfiRulerAlt2 className="text-[24px] text-[#11275f]" />;
    default:
      return null;
  }
};

Icon.propTypes = {
  name: PropTypes.string.isRequired,
};

export default Icon;
