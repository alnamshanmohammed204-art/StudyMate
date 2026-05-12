import { useState, useEffect } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState("");

  // Load tasks from local storage on initial render
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
  }, []);

  // Save tasks to local storage whenever they change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = () => {
    if (newTask) {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask("");
    }
  };

  const toggleTaskCompletion = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const deleteTask = (index) => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-md mx-auto">
      <input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="w-full p-2 mb-4 border rounded-md"
      />
      <button
        onClick={addTask}
        className="w-full bg-purple-600 text-white py-2 rounded-md hover:bg-purple-700"
      >
        Add Task
      </button>

      <ul className="mt-4 space-y-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className={`flex items-center justify-between p-2 rounded-md ${task.completed ? "bg-gray-200 line-through" : "bg-gray-100"}`}
          >
            <span onClick={() => toggleTaskCompletion(index)} className="cursor-pointer text-gray-800">
              {task.text}
            </span>
            <button onClick={() => deleteTask(index)} className="text-red-600 hover:text-red-800">
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;