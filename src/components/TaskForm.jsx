import PropTypes from "prop-types";

function TaskForm({
  taskInput,
  setTaskInput,
  selectedPriority,
  handleCheckboxChange,
  addTask,
}) {
  return (
    <div className="all-form">
      <div className="form">
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
          onChange={(e) => setTaskInput(e.target.value)}
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
      <div className="tab-buttons-container"></div>
    </div>
  );
}
TaskForm.propTypes = {
  taskInput: PropTypes.string.isRequired,
  setTaskInput: PropTypes.func.isRequired,
  selectedPriority: PropTypes.string.isRequired,
  handleCheckboxChange: PropTypes.func.isRequired,
  addTask: PropTypes.func.isRequired,
};
export default TaskForm;
