import PropTypes from "prop-types";
import TabButtons from "./TabButtons";
import TaskPage from "./TaskPage";
import CompletedTasksPage from "./CompletedTasksPage";

function PageContainer({
  currentPage,
  tasks,
  validatedTasks,
  deleteTask,
  validateTask,
  setSelectedPriority,
  setCurrentPage,
}) {
  return (
    <div className="all">
      <TabButtons setCurrentPage={setCurrentPage} />
      <div className="task-list-container">
        <TaskPage
          currentPage={currentPage}
          tasks={tasks}
          validatedTasks={validatedTasks}
          deleteTask={deleteTask}
          validateTask={validateTask}
          setSelectedPriority={setSelectedPriority}
          setCurrentPage={setCurrentPage}
        />
        <CompletedTasksPage
          currentPage={currentPage}
          validatedTasks={validatedTasks}
          setCurrentPage={setCurrentPage}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  );
}
PageContainer.propTypes = {
  currentPage: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      text: PropTypes.string.isRequired,
      priority: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
    })
  ).isRequired,
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
  setSelectedPriority: PropTypes.func.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
};
export default PageContainer;
