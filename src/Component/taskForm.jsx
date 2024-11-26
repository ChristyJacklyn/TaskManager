import React,{useState} from "react";

const TaskForm = ({onAddTask}) => { 

    const [task, setTask] = useState('');

    const handlesubmit = (e) => {
        e.preventDefault(); // prevents behaviour of loading page while submitting the page
        if (task.trim()){
            onAddTask(task); // when form is submitted then this sends task to the parent component  and parent (App) handles the task here it adds to the list 
            setTask('');
        }
    }

    return(
        <form onSubmit={handlesubmit} className="text-center gap-5 p-5">
            
            <input // controlled component bcs it it controlled by vlaue of (task)
                type="text"
                value={task}
                onChange={(e)=>setTask(e.target.value)}
                placeholder="Enter the task to list..."
                style={{height:'50px',width:'300px',borderRadius:'10px'}}
            /><br />

            <button type="submit" style={buttonStyle}>Add To list</button>

        </form>
    );
}

export default TaskForm;

const buttonStyle ={
    margin: '5px',
    backgroundColor: 'gray', // Primary blue color
    color: 'white',            // Contrast text
    border: 'none',            // No border
    borderRadius: '5px',       // Smooth edges
    padding: '10px 20px',      // Balanced spacing
    fontSize: '16px',          // Readable text
    fontWeight: 'bold',        // Emphasize the button text
    cursor: 'pointer',         // Pointer on hover
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', // Subtle shadow
    transition: 'all 0.3s ease', // Smooth hover effect

  }