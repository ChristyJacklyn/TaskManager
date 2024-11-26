import React from 'react';
import TaskItem from './taskItems';

const TaskList = ({ tasks, onToggleComplete, onDelete }) => {

  return (

    <div className="task-list">
      {tasks.length === 0 ? (
        <p style={{ fontSize: '20px',margin:'10px' }}>No tasks available.</p>
      ) : (
        tasks.map((task) => (
          <TaskItem
            key={task.id}
            task={task}
            onToggleComplete={onToggleComplete}
            onDelete={onDelete}
          />
        ))
      )}
    </div>
  );
};

export default TaskList;
