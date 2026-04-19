import React, { useState } from 'react';


const Country = ({country}) => {
    const [visited,setVisited]=useState(false);
    const handleVisited=()=>{
        setVisited(!visited)
    
    }

    return (
        <div className={`country ${visited && 'country-visited'}`}>
            <img src={country.flags.flags.png} alt="" />
            <h2>Country Name: {country.name.common} 
                 </h2>
            <h3>Country Status: {country.area.area>10000 ? 'Big country' : 'Small country' }</h3>
            <button onClick={handleVisited}>
                { visited ? 'visited' : 'not visited'}
            </button>
        </div>
    );
}

export default Country;