// TaskForm.jsx
import PropTypes from "prop-types";
import TabButtons from "./TabButtons";

function TaskForm({
  taskInput,
  setTaskInput,
  selectedPriority,
  handleCheckboxChange,
  addTask,
  setCurrentPage,
}) {
  const formatTaskInput = (input) => {
    return input.charAt(0).toUpperCase() + input.slice(1);
  };

  return (
    <div className="all-form">
      <TabButtons setCurrentPage={setCurrentPage} />
      <div className="form">
        <div className="checkbox-container">
          <label>
            Urgente
            <input
              type="checkbox"
              value="urgente"
              checked={selectedPriority === "urgente"}
              onChange={() => handleCheckboxChange("urgente")}
            />
          </label>
          <label>
            Moyen
            <input
              type="checkbox"
              value="moyen"
              checked={selectedPriority === "moyen"}
              onChange={() => handleCheckboxChange("moyen")}
            />
          </label>
          <label>
            Pas Pressée
            <input
              type="checkbox"
              value="pas pressé"
              checked={selectedPriority === "pas pressé"}
              onChange={() => handleCheckboxChange("pas pressé")}
            />
          </label>
        </div>
        <div className="input-container">
          <input
            className="input"
            type="text"
            placeholder="Ajouter une tâche..."
            value={taskInput}
            onChange={(e) => setTaskInput(formatTaskInput(e.target.value))}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                addTask();
              }
            }}
          />
          <button className="button-add" onClick={addTask}>
            Ajouter cette tâche
          </button>
        </div>
      </div>
    </div>
  );
}

TaskForm.propTypes = {
  taskInput: PropTypes.string.isRequired,
  setTaskInput: PropTypes.func.isRequired,
  selectedPriority: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};

export default TaskForm;
