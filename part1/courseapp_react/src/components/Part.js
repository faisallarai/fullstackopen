import React from 'react';

const Part = ({name, exercise, id}) => {
    return(
      <li key={id}>{name} {exercise}</li>
    )
  }

  export default Part