import React, { use } from 'react';
import Country from './Country';

const Countries1 = (countriesPromise) => {
    const countriesData1=use(countriesPromise)
    const countries1=countriesData1;
    return (
        <div>
           <h1>The Contries Introduce: {countries1.length} </h1> 
           {
            countries1.map(country1=> <Country country1={countries1}></Country> )
           }
        </div>
    );
};

export default Countries1;