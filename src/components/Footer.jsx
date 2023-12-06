import PropTypes from "prop-types";

const Footer = ({ toggleDarkMode }) => {
  return (
    <div className="footer">
      <button onClick={toggleDarkMode}>
        {toggleDarkMode ? (
          <img src="../src/assets/images/pere-noel.png" alt="Père Noël" />
        ) : (
          <img src="../src/assets/images/citrouille.png" alt="Citrouille" />
        )}
      </button>
      <p>Ceci est le contenu du footer.</p>
    </div>
  );
};
Footer.propTypes = {
  toggleDarkMode: PropTypes.func.isRequired,
};
export default Footer;
