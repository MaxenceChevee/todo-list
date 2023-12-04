import PropTypes from "prop-types";
import { RiCloseCircleLine } from "react-icons/ri";

function TaskListPage({ tasks, deleteTask, filteredPriority, validateTask }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <div
          key={task.id}
          className={`task-card ${
            task.completed ? "completed" : `priority-${task.priority}`
          }`}
        >
          <div className="task-content">
            <p>{task.text}</p>
          </div>
          <div className="button-container">
            {filteredPriority !== "taches accomplies" && !task.completed && (
              <button
                className="button-validate"
                onClick={() => validateTask(task.id)}
              >
                ✔
              </button>
            )}
            <RiCloseCircleLine
              className="button-delete"
              onClick={() => deleteTask(task.id)}
            />
          </div>
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
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  filteredPriority: PropTypes.string.isRequired,
  validateTask: PropTypes.func.isRequired,
};

export default TaskListPage;
