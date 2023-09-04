import React from "react";

const CountryInfo = ({match}) => {
    const languages = Object.entries(match[0].languages)
    const flag = match[0].flags.png
    const flagalt = match[0].flags.alt

    return(
        <div>
            <h1> {match[0].name.common} </h1>
            <p> Capital: {match[0].capital[0]}</p>
            <p> Area: {match[0].area} km²</p>
            <h2>Languages</h2>   
            <ul>
                {languages.map(([code, language], index) => (
                    <li key={index}>
                        {language}
                    </li>
                ))}
            </ul>
            <img src= {flag} alt={flagalt} /> 
        </div>
    )
}

export default CountryInfo