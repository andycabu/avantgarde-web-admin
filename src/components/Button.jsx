import PropTypes from "prop-types";
const Button = ({ text, onClick, className, disable, type }) => {
  return (
    <button
      type={type ? type : "button"}
      className={`${className} bg-[#122860]  text-white cursor-pointer  rounded-md`}
      disabled={disable}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  disable: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
