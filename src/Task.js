import React from 'react';

function Task({ task, deleteTask, toggleTaskCompletion }) {
  return (
    <div className={`task-card ${task.completed ? 'completed-task' : ''} priority-${task.priority}`}>
      <span className="task-title">{task.title}</span>
      <div className="task-actions">
        <button onClick={() => toggleTaskCompletion(task.id)}>
          {task.completed ? 'Undo' : 'Complete'}
        </button>
        <button onClick={() => deleteTask(task.id)}>Delete</button>
      </div>
    </div>
  );
}

export default Task;
