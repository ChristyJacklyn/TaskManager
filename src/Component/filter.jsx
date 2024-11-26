import React from 'react';

const Filters = ({ filter, setFilter }) => {

  const buttonStyle ={
    flex: '1',
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
  return (
    <div className="filters flex justify-between">
      <button style={ {
            flex: '1',
            backgroundColor: filter === 'all' ? 'green' : 'lightgray',
            color: filter === 'all' ? 'white' : 'black',
            padding: '10px',
            marginRight: '10px',
            border: '1px solid black',
            borderRadius: '5px',
            fontWeight:'bold'
          }}
          onClick={() => setFilter('all')}>All</button>
      <button style={ {
            flex: '1',
            backgroundColor: filter === 'completed' ? 'green' : 'lightgray',
            color: filter === 'completed' ? 'white' : 'black',
            padding: '10px',
            marginRight: '10px',
            border: '1px solid black',
            borderRadius: '5px',
            fontWeight:'bold'
          }} 
          onClick={() => setFilter('completed')}>Completed</button>

      <button style={{
            flex: '1',
            backgroundColor: filter === 'pending' ? 'green' : 'lightgray',
            color: filter === 'pending' ? 'white' : 'black',
            padding: '10px',
            marginRight: '10px',
            border: '1px solid black',
            borderRadius: '5px',
            fontWeight:'bold'
          }} 
          onClick={() => setFilter('pending')}>Pending</button>
    </div>
  );
};

export default Filters;


