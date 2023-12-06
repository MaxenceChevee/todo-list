// App.jsx
import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import TaskForm from "./components/TaskForm";
import PageContainer from "./components/PageContainer";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    const htmlElement = document.querySelector("html");
    htmlElement.classList.toggle("dark-mode", !darkMode);
  };

  const [tasks, setTasks] = useState(() => {
    const storedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
    const storedValidatedTasks =
      JSON.parse(localStorage.getItem("validatedTasks")) || [];
    const mergedTasks = [...storedTasks, ...storedValidatedTasks];
    return mergedTasks;
  });

  const [taskInput, setTaskInput] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(null);
  const [currentPage, setCurrentPage] = useState("form");
  const [validatedTasks, setValidatedTasks] = useState(() => {
    const storedValidatedTasks =
      JSON.parse(localStorage.getItem("validatedTasks")) || [];
    return storedValidatedTasks;
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem("validatedTasks", JSON.stringify(validatedTasks));
  }, [validatedTasks]);

  const addTask = () => {
    if (taskInput.trim() === "" || !selectedPriority) return;

    const newTask = {
      id: uuidv4(),
      text: taskInput,
      priority: selectedPriority,
      completed: false,
    };

    const updatedTasks = [...tasks, newTask];
    setTasks(updatedTasks);
    setTaskInput("");
    setSelectedPriority(null);
  };

  const deleteTask = (taskId) => {
    const taskToDelete = validatedTasks.find((task) => task.id === taskId);
    if (taskToDelete) {
      const updatedValidatedTasks = validatedTasks.filter(
        (task) => task.id !== taskId
      );
      setValidatedTasks(updatedValidatedTasks);
    }
    const updatedTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(updatedTasks);
  };

  const validateTask = (taskId) => {
    const taskToValidate = tasks.find((task) => task.id === taskId);

    if (taskToValidate) {
      const newCompletedTask = {
        id: taskToValidate.id,
        text: taskToValidate.text,
        priority: taskToValidate.priority,
        completed: true,
      };

      const updatedValidatedTasks = [...validatedTasks, newCompletedTask];
      setValidatedTasks(updatedValidatedTasks);

      const updatedTasks = tasks.filter((task) => task.id !== taskId);
      setTasks(updatedTasks);
    }
  };

  const handleCheckboxChange = (priority) => {
    setSelectedPriority((prevPriority) =>
      prevPriority === priority ? null : priority
    );
  };
  const handleNavbarClick = (page) => {
    setCurrentPage(page);
  };
  return (
    <div className={`app ${darkMode ? "dark-mode" : ""}`}>
      <main className="main">
        <Navbar handleNavbarClick={handleNavbarClick} />
        {currentPage === "form" && (
          <TaskForm
            taskInput={taskInput}
            setTaskInput={setTaskInput}
            selectedPriority={selectedPriority}
            handleCheckboxChange={handleCheckboxChange}
            addTask={addTask}
            setCurrentPage={setCurrentPage}
          />
        )}
        {currentPage !== "form" && (
          <PageContainer
            currentPage={currentPage}
            tasks={tasks}
            validatedTasks={validatedTasks}
            deleteTask={deleteTask}
            validateTask={validateTask}
            setSelectedPriority={setSelectedPriority}
            setCurrentPage={setCurrentPage}
          />
        )}
        <div
          className={`santa-container ${
            darkMode ? "santa-halloween" : "santa-noel"
          }`}
        >
          <div className="santa"></div>
        </div>
        <Footer toggleDarkMode={toggleDarkMode} />
      </main>
    </div>
  );
}

export default App;
