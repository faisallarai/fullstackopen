import React from 'react';
import Part from './Part';
import Total from './Total';

const Course = ({name, id, parts}) => {
  
    const partList = () => parts.map(part => <Part key={part.id} name={part.name} exercise={part.exercise} id={part.id} />)
    
    const total = parts.reduce((total,part) => {
      return total + part.exercise
    },0)
  
    return(
      <div>
        <li key={id}><h2>{name}</h2></li>
        <ul>
          {partList()}
        </ul>
        <Total value={total} />
      </div>
    )
}

export default Course