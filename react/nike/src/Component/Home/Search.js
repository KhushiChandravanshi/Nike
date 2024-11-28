import React from 'react';
import './Search.css';

const Search = () => {
    return(
        <>
            <div class="searchh">
          <div id="search">
            <div id="logo">
                <span>N</span>
            </div>
            <div id="heading">
                Let's Shop & Get Best
            </div>
            <div class="dropdown">
                <select>
                    <option>---Our Collection----</option>
                    <option>Saree</option>
                </select>
                <select id="restSelect">
                    <option>----Fabric----</option>
                    <option>Printed</option>
                </select>
            </div>
            </div>
        </div>
       
        </>
    );
}


export default Search;