import PropTypes from "prop-types";

const Footer = ({ toggleDarkMode }) => {
  return (
    <div className="footer">
      <p>&copy; 2023 Maxence CHEVEE</p>
      <button onClick={toggleDarkMode}></button>
    </div>
  );
};
Footer.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};
export default Footer;
