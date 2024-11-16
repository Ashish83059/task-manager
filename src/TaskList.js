import React from 'react';
import Task from './Task';

function TaskList({ tasks, deleteTask, toggleTaskCompletion }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
        />
      ))}
    </div>
  );
}

export default TaskList;
