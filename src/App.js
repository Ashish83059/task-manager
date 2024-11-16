import React, { useState, useEffect } from 'react';
import TaskInput from './TaskInput';
import TaskList from './TaskList';
import './App.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState('date');

  // Load tasks from local storage on mount
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  // Save tasks to local storage on change
  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title, priority) => {
    const newTask = { id: Date.now(), title, completed: false, priority, date: new Date() };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const handleSearch = (query) => {
    setSearchQuery(query);
  };

  const handleSort = (criteria) => {
    setSortBy(criteria);
  };

  const filteredTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortBy === 'priority') return a.priority.localeCompare(b.priority);
      if (sortBy === 'date') return new Date(b.date) - new Date(a.date);
      return 0;
    });

  return (
    <div className="app-container">
      <h1>Task Manager</h1>
      <TaskInput addTask={addTask} handleSearch={handleSearch} handleSort={handleSort} />
      <TaskList tasks={filteredTasks} deleteTask={deleteTask} toggleTaskCompletion={toggleTaskCompletion} />
    </div>
  );
}

export default App;
