import PropTypes from "prop-types";
import { RiCloseCircleLine } from "react-icons/ri";
import "../tasklist.css";

const TaskList = ({
  tasks,
  onDeleteTask,
  filteredPriority,
  onValidateTask,
}) => {
  console.log("Toutes les tâches :", tasks);
  console.log("Priorité filtrée :", filteredPriority);

  let filteredTasks;

  if (filteredPriority === "taches accomplies") {
    filteredTasks = tasks.filter((task) => task.completed);
  } else {
    filteredTasks = tasks.filter(
      (task) => filteredPriority === null || task.priority === filteredPriority
    );
  }

  return (
    <div className="task-list">
      {filteredTasks.map((task) => (
        <div key={task.id} className={`task-card priority-${task.priority}`}>
          <p>{task.text}</p>

          {filteredPriority !== "taches accomplies" && (
            <button
              className="button-validate"
              onClick={() => onValidateTask(task.id)}
            >
              Valider
            </button>
          )}
          <RiCloseCircleLine
            className="button-delete"
            onClick={() => onDeleteTask(task.id)}
          />
        </div>
      ))}
    </div>
  );
};

TaskList.propTypes = {
  tasks: PropTypes.array.isRequired,
  onDeleteTask: PropTypes.func.isRequired,
  filteredPriority: PropTypes.string,
  onValidateTask: PropTypes.func,
  showValidateButton: PropTypes.bool, // Nouvelle prop pour contrôler l'affichage du bouton
};

export default TaskList;
