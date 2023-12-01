import PropTypes from "prop-types";
import { RiCloseCircleLine } from "react-icons/ri";

function TaskListPage({ tasks, deleteTask, filteredPriority, validateTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div key={task.id} className={`task-card priority-${task.priority}`}>
          <p>{task.text}</p>
          {filteredPriority !== "taches accomplies" && (
            <button
              className="button-validate"
              onClick={() => validateTask(task.id)}
            >
              Valider
            </button>
          )}
          <RiCloseCircleLine
            className="button-delete"
            onClick={() => deleteTask(task.id)}
          />
        </div>
      ))}
    </div>
  );
}
TaskListPage.propTypes = {
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  filteredPriority: PropTypes.string.isRequired,
  validateTask: PropTypes.func.isRequired,
};
export default TaskListPage;
