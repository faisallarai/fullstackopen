import React from 'react'

const Country = ({country, handleShowClick, handleDeleteClick}) => {
  
    return(
      <div>
        <p key={country.id}>{country.name}<button onClick={() => handleShowClick(country.id)}>show</button><button onClick={() => handleDeleteClick(country.id)}>X</button></p>
      </div>
      
    )
  }

export default Country