import PropTypes from "prop-types";

function TabButtons({ setCurrentPage }) {
  return (
    <div className="tab-buttons-container">
      <ul className="tab-buttons">
        <li>
          <button onClick={() => setCurrentPage("form")}>Formulaire</button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("urgente")}>
            Tâches Urgentes
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("moyen")}>
            Tâches Moyennes
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("pas pressé")}>
            Tâches Pas Pressées
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("taches accomplies")}>
            Tâches Accomplies
          </button>
        </li>
        <li>
          <button onClick={() => setCurrentPage("toutes")}>
            Toutes les Tâches
          </button>
        </li>
      </ul>
    </div>
  );
}
TabButtons.propTypes = {
  setCurrentPage: PropTypes.func.isRequired,
};
export default TabButtons;
