import axios from "axios";

const countryUrl = "https://studies.cs.helsinki.fi/restcountries/api/all"

const getAll =()=>{
    return axios.get(countryUrl)
            .then(res => res.data)
            .catch(error => {
                throw error;  
            });
}

export {
    getAll
}