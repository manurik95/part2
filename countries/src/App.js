import './App.css';
import { useState, useEffect } from 'react';
import {getAll } from "./services/countryapi"
import CountryList from "./components/CountryList"


function App() {

  const [search, setSearch] = useState("")
  const [countryData, setCountryData] = useState([])
  const [showCountryInfo, setShowCountryInfo] = useState(false)

  useEffect(() => {
    getAll().then(countryDataapi => {
      setCountryData(countryDataapi)
    })
  }, [])

  const handleSearch = (e) => {
    setSearch(e.target.value)
    setShowCountryInfo(false)
  }

  const handleShowButton =(index, match) => {
    setShowCountryInfo({
      0: match[index]}) 
}

  return (
    <div>
       country: <input value={search} onChange={handleSearch}/> 
     
      <CountryList countryData={countryData} search={search} handleShowButton={handleShowButton} showCountryInfo= {showCountryInfo}/>
    </div>
  );
}

export default App;
