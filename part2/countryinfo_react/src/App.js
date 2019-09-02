import React, {useState, useEffect} from 'react';
import Countries from './components/Countries'
import countryService from './services/countries'


const App = () => {
  const [filter, setFilter] = useState('')
  const [countries, setCountries] = useState([])
  const [countriesToShow, setCountriesToShow] = useState([])

  useEffect(() => {
    countryService.getAll().then(returnedCountries => {
      setCountries(returnedCountries)
    })
  }, [])

  const handleFilterChange = (event) => {
    
    const isEmpty = (str) => str.length === 0
    const newCountriesToShow = isEmpty(event.target.value) ? [] : countries.filter(country => country.name.toLowerCase().includes(event.target.value.toLowerCase()) || country.id.toString().includes(event.target.value))
    setCountriesToShow(newCountriesToShow)
    setFilter(event.target.value)
  }

  return (
    <div>
      <label>find countries</label>
      <input onChange={handleFilterChange} value={filter} />
      <Countries setCountries={setCountries} countries={countries} countriesToShow={countriesToShow} setCountriesToShow={setCountriesToShow} />
    </div>
  )
}

export default App;
