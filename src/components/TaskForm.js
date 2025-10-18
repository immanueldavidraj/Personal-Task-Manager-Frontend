// src/components/TaskForm.js
import React, { useState, useEffect } from 'react';

const TaskForm = ({ task, onSubmit, onCancel }) => {
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    dueDate: '',
    completed: false
  });

  useEffect(() => {
    if (task) {
      setFormData({
        title: task.title || '',
        description: task.description || '',
        dueDate: task.dueDate || '',
        completed: task.completed || false
      });
    } else {
      setFormData({
        title: '',
        description: '',
        dueDate: '',
        completed: false
      });
    }
  }, [task]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (task) {
      onSubmit(task.id, formData);
    } else {
      onSubmit(formData);
    }
    setFormData({
      title: '',
      description: '',
      dueDate: '',
      completed: false
    });
  };

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">
          {task ? 'Edit Task' : 'Add New Task'}
        </h5>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">Title *</label>
            <input
              type="text"
              className="form-control"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="description" className="form-label">Description</label>
            <textarea
              className="form-control"
              id="description"
              name="description"
              rows="3"
              value={formData.description}
              onChange={handleChange}
            />
          </div>
          
          <div className="mb-3">
            <label htmlFor="dueDate" className="form-label">Due Date</label>
            <input
              type="date"
              className="form-control"
              id="dueDate"
              name="dueDate"
              value={formData.dueDate}
              onChange={handleChange}
            />
          </div>
          
          {task && (
            <div className="mb-3 form-check">
              <input
                type="checkbox"
                className="form-check-input"
                id="completed"
                name="completed"
                checked={formData.completed}
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="completed">
                Completed
              </label>
            </div>
          )}
          
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              {task ? 'Update Task' : 'Add Task'}
            </button>
            {task && (
              <button 
                type="button" 
                className="btn btn-secondary"
                onClick={onCancel}
              >
                Cancel
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default TaskForm;