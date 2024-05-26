import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [task, setTask] = useState('');

  // Function to handle changes in task text
  const handleTaskChange = (index, value) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], task: value };
    setTodos(newTodos);
  };

  // Function to handle checkbox toggle for task completion
  const handleCheckboxChange = (index) => {
    const newTodos = [...todos];
    newTodos[index] = { ...newTodos[index], completed: !newTodos[index].completed };
    setTodos(newTodos);
  };

  // Function to add a new task
  const addTodo = () => {
    if (task.trim()) {
      // Prepend new task to the todos array
      setTodos([{ task: task, completed: false }, ...todos]);
      setTask(''); // Clear the task input field
    }
  };

  // Function to delete a task by index
  const deleteTodo = (index) => {
    const updatedTodos = [...todos];
    updatedTodos.splice(index, 1);
    setTodos(updatedTodos);
  };

  return (
    <div className="app-container">
      <h1>Your Personalized To-Do List</h1>
      
      {/* Input field and Add Task button */}
      <div className="add-task-container">
        <input
          type='text'
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter a new task"
          className="task-input"
        />
        <button onClick={addTodo} className="add-button">Add Task</button>
      </div>
      
      {/* List of tasks */}
      <div className="todo-list">
        {todos.map((todo, index) => (
          <div key={index} className={`todo-item ${todo.completed ? 'completed' : ''}`}>
            <input
              type='checkbox'
              checked={todo.completed}
              onChange={() => handleCheckboxChange(index)}
              className="checkbox"
            />
            <input
              type='text'
              value={todo.task}
              onChange={(e) => handleTaskChange(index, e.target.value)}
              className={`task-input ${todo.completed ? 'completed-text' : ''}`}
            />
            <button onClick={() => deleteTodo(index)} className="delete-button">Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
