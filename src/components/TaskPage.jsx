import PropTypes from "prop-types";
import TaskListPage from "./TaskListPage";

function TaskPage({ currentPage, tasks, deleteTask, validateTask }) {
  return (
    <>
      {currentPage === "urgente" && (
        <TaskListPage
          tasks={tasks.filter((task) => task.priority === "urgente")}
          deleteTask={deleteTask}
          filteredPriority="urgente"
          validateTask={validateTask}
        />
      )}
      {currentPage === "moyen" && (
        <TaskListPage
          tasks={tasks.filter((task) => task.priority === "moyen")}
          deleteTask={deleteTask}
          filteredPriority="moyen"
          validateTask={validateTask}
        />
      )}
      {currentPage === "pas pressé" && (
        <TaskListPage
          tasks={tasks.filter((task) => task.priority === "pas pressé")}
          deleteTask={deleteTask}
          filteredPriority="pas pressé"
          validateTask={validateTask}
        />
      )}
      {currentPage === "toutes" && (
        <TaskListPage
          tasks={tasks}
          deleteTask={deleteTask}
          validateTask={validateTask}
        />
      )}
    </>
  );
}
TaskPage.propTypes = {
  currentPage: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  validateTask: PropTypes.func.isRequired,
  setSelectedPriority: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
export default TaskPage;
