// src/components/TaskItem.js
import React from 'react';

const TaskItem = ({ task, onEdit, onDelete, onToggleComplete }) => {
  const formatDate = (dateString) => {
    if (!dateString) return 'No due date';
    return new Date(dateString).toLocaleDateString();
  };

  return (
    <div className={`card mb-2 ${task.completed ? 'border-success' : ''}`}>
      <div className="card-body">
        <div className="d-flex justify-content-between align-items-start">
          <div className="flex-grow-1">
            <h5 className={`card-title ${task.completed ? 'text-decoration-line-through text-muted' : ''}`}>
              {task.title}
            </h5>
            {task.description && (
              <p className={`card-text ${task.completed ? 'text-muted' : ''}`}>
                {task.description}
              </p>
            )}
            <small className="text-muted">
              Due: {formatDate(task.dueDate)}
            </small>
          </div>
          
          <div className="btn-group ms-3">
            <button
              className={`btn btn-sm ${task.completed ? 'btn-warning' : 'btn-success'}`}
              onClick={() => onToggleComplete(task)}
              title={task.completed ? 'Mark as pending' : 'Mark as complete'}
            >
              {task.completed ? '↶' : '✓'}
            </button>
            
            <button
              className="btn btn-sm btn-primary"
              onClick={() => onEdit(task)}
              title="Edit task"
            >
              ✏️
            </button>
            
            <button
              className="btn btn-sm btn-danger"
              onClick={() => onDelete(task.id)}
              title="Delete task"
            >
              🗑️
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TaskItem;