import PropTypes from "prop-types";
const Section = ({ children, className }) => {
  return (
    <section
      className={`${className} px-[70px] max-[1000px]:px-[30px] max-[600px]:px-0 bg-[#eaeaea]`}
    >
      {children}
    </section>
  );
};

Section.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Section;
