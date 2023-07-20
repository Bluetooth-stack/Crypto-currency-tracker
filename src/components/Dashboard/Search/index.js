import React from 'react';
import './style.css'
import SearchSharpIcon from '@mui/icons-material/SearchSharp';

function Search({searched, onSearch}) {
  return (
    <div className='searchboxContainer'>
        <SearchSharpIcon />
        <input type='text' value={searched} className='inputBox' placeholder='Search' onChange={(e)=>{onSearch(e)}}/>
    </div>
  )
}

export default Search