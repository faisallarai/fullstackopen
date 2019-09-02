import React from 'react'
import CountryDetail from './CountryDetail'
import Country from './Country'
import countryService from '../services/countries'


const Countries = ({countries, setCountries, countriesToShow, setCountriesToShow}) => {

    const isTooMany = (ar) => ar.length > 4 

    const deleteCountry = (country_id) => {
        const country = countries.find(c => c.id === country_id)
        if(window.confirm(`Delete ${country.name} ?`)){
            countryService.remove(country_id).then(returnedCountry => {
                const newCountries = countries.filter(c => c.id !== country_id)
                setCountries(newCountries)
                const newCountriesToShow = countriesToShow.filter(c => c.id !== country_id)
                setCountriesToShow(newCountriesToShow)
            })
        }
    }

    const showCountries = (country_id) => {
        const countriesToShow = countries.filter(c => c.id === country_id)
        setCountriesToShow(countriesToShow)
    }
  
    const countryList = () => isTooMany(countriesToShow) ? <p>Too many matches, specify another filter</p> : countriesToShow.map(country => {  
      return countriesToShow.length === 1 ?  <CountryDetail key={country.id} country={country} /> : <Country handleDeleteClick={() => deleteCountry(country.id)} handleShowClick={() => showCountries(country.id)} key={country.id} country={country} />
    })
  
  
    return(
      <div>
        {countryList()}
      </div>
    )
  }

export default Countries