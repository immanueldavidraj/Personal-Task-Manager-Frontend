// src/components/TaskList.js
import React from 'react';
import TaskItem from './TaskItem';

const TaskList = ({ tasks, onEdit, onDelete, onToggleComplete }) => {
  const completedTasks = tasks.filter(task => task.completed);
  const pendingTasks = tasks.filter(task => !task.completed);

  return (
    <div>
      <h3>Pending Tasks ({pendingTasks.length})</h3>
      {pendingTasks.length === 0 ? (
        <p className="text-muted">No pending tasks. Add some tasks above!</p>
      ) : (
        pendingTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
      
      <h3 className="mt-4">Completed Tasks ({completedTasks.length})</h3>
      {completedTasks.length === 0 ? (
        <p className="text-muted">No completed tasks yet.</p>
      ) : (
        completedTasks.map(task => (
          <TaskItem
            key={task.id}
            task={task}
            onEdit={onEdit}
            onDelete={onDelete}
            onToggleComplete={onToggleComplete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;