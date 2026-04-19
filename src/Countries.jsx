import React, { use, useState } from 'react';
import Country from './Country'
import { Linter } from 'eslint';
const Countries = ({ countriPromise }) => {
    const [visitedCountry,setVisitedCountry] = useState([])
    const handleVisitedCountry=(country)=>{
    const newVisitedCountry= [...visitedCountry,country];
    setVisitedCountry(newVisitedCountry);
    }
    console.log(visitedCountry)
    const countriesData = use(countriPromise);
    const countries = countriesData.countries;

    return (
        <div>
            <h1>We are knowing about all countries</h1>
            <h2>Total Countries: {countries.length} </h2>
            <h2>Total Visisted Country: {visitedCountry.length} </h2>
          
            <div className='countries'>
                {
                    countries.map(country => <Country country={country}
                        handleVisitedCountry={handleVisitedCountry}
                    ></Country>)
                }
            </div>
        </div>
    );
};

export default Countries;