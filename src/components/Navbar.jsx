import PropTypes from "prop-types";
function Navbar({ handleNavbarClick }) {
  return (
    <div className="navbar">
      <ul>
        <li>
          <a onClick={() => handleNavbarClick("form")}>Accueil</a>
        </li>
        <li>
          <a onClick={() => handleNavbarClick("toutes")}>Tâches</a>
        </li>
        <li>
          <a onClick={() => handleNavbarClick("about")}>À propos</a>
        </li>
      </ul>
    </div>
  );
}
Navbar.propTypes = {
  handleNavbarClick: PropTypes.func.isRequired,
};
export default Navbar;
