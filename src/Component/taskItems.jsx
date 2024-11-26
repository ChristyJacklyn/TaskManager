import React from "react";

const TaskItem = ({task, onToggleComplete, onDelete}) =>{

    return(
        <div className={` ${task.completed ? 'completed' : ''} space-x-5`} style={{padding:'10px'}}>
            <div className="flex lg:flex-row justify-between">
                <div className="">
                    <input
                        type="checkbox"
                        checked={task.completed} // Checked if the task is completed
                        onChange={() => onToggleComplete(task.id)} // Trigger onToggleComplete on change
                        style={{ width: '30px', height: '30px' }}
                    />
                </div>
                <div className="flex-1">
                    <span style={{ fontSize: '20px',margin:'10px' }}>{task.name}</span>
                </div>
                <div className="">
                    <button onClick={() => onDelete(task.id)} style={buttonStyle}> Delete</button>
                </div>
        </div>
    </div>
    );
}

export default TaskItem;


const buttonStyle ={
    width:'100px',
    marginLeft:'20px',
    backgroundColor: 'white', // Primary blue color
    color: 'black',            // Contrast text
    border: 'none',            // No border
    borderRadius: '5px',       // Smooth edges
    padding: '5px',      // Balanced spacing
    fontSize: '15px',          // Readable text
    fontWeight: 'bold',        // Emphasize the button text
    cursor: 'pointer',         // Pointer on hover
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    transition: 'all 0.3s ease', // Smooth hover effect

  }