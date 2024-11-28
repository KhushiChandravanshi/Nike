import React,{useState,useEffect} from 'react';
import './QuickSearch.css';
import QuickDisplay from './QuickDisplay';

const url = "";

const QuickSearch = () => {
    
    const [CategoryType,setCategoryType] = useState([])

    useEffect(() => {
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            setCategoryType(data)
        })
    },[])
    return(
        <>
          <div id="quickSearch">
            <span class="quickHeading">Quick Search</span>
            <span class="quickSubHeading"><button>Enjoy the shopping</button></span>
           <QuickDisplay quickData={CategoryType}/>
        </div>
        </>
    );
}


export default QuickSearch;