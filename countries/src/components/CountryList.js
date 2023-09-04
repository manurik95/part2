import React from "react";
import CountryInfo from "./CountryInfo";
import CountryRows from "./CountryRows";
import TooManyMatches from "./TooManyMatches";

const CountryList =( {countryData, search, handleShowButton, showCountryInfo})=>{
    const match = countryData.filter(country => country.name.common.toLocaleLowerCase().includes(search.toLocaleLowerCase()))

        if (search==="") {
            return null
        } else if (match.length <=10 && match.length !==1) {
            return  <CountryRows match = {match} handleShowButton={handleShowButton} showCountryInfo={showCountryInfo}/> 
        } else if (match.length === 1 ) {
            return <CountryInfo match = {match}/>      
        } else {
            return <TooManyMatches />
        }

        
        
}

export default CountryList