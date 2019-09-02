import React from 'react'

const CountryDetail = ({country}) => {
    return(
      <div>
        <p>{country.name}</p>
        <p>{country.capital}</p>
      </div>
    )
  }

export default CountryDetail