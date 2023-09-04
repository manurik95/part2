import React from "react";
import CountryInfo from "./CountryInfo";

const CountryRows = ({match, handleShowButton, showCountryInfo}) => {

   // console.log(showCountryInfo[0].name.common);
    return (
        <div>
            {match.map((country, index) => (
                <p key={index}>{country.name.common} <button 
                onClick={()=> handleShowButton(index, match)}>
                    Show </button></p>
            ))}
           {showCountryInfo && <CountryInfo match={showCountryInfo} />}
        </div>
        

        
    )
}

export default CountryRows