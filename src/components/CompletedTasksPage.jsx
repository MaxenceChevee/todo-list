import PropTypes from "prop-types";
import TaskListPage from "./TaskListPage";

function CompletedTasksPage({
  currentPage,
  validatedTasks,
  deleteTask,
  validateTask,
}) {
  return (
    <>
      {currentPage === "taches accomplies" && (
        <TaskListPage
          tasks={validatedTasks}
          deleteTask={deleteTask}
          filteredPriority="taches accomplies"
          showValidateButton={false}
          onValidateTask={(taskId) => {
            const taskToValidate = validatedTasks.find(
              (task) => task.id === taskId
            );
            if (!taskToValidate) {
              validateTask(taskId);
            }
          }}
        />
      )}
    </>
  );
}

CompletedTasksPage.propTypes = {
  currentPage: PropTypes.string.isRequired,
  validatedTasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
  deleteTask: PropTypes.func.isRequired,
  validateTask: PropTypes.func.isRequired,
};

export default CompletedTasksPage;
