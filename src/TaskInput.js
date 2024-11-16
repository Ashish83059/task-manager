import React, { useState } from 'react';

function TaskInput({ addTask, handleSearch, handleSort }) {
  const [title, setTitle] = useState('');
  const [priority, setPriority] = useState('low');

  const handleAddTask = () => {
    if (title.trim()) {
      addTask(title, priority);
      setTitle('');
      setPriority('low');
    }
  };

  return (
    <div className="task-input-container">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Add a new task"
      />
      <select value={priority} onChange={(e) => setPriority(e.target.value)}>
        <option value="low">Low</option>
        <option value="medium">Medium</option>
        <option value="high">High</option>
      </select>
      <button onClick={handleAddTask}>Add Task</button>
      <input
        type="text"
        onChange={(e) => handleSearch(e.target.value)}
        placeholder="Search tasks"
      />
      <select onChange={(e) => handleSort(e.target.value)}>
        <option value="date">Sort by Date</option>
        <option value="priority">Sort by Priority</option>
      </select>
    </div>
  );
}

export default TaskInput;
