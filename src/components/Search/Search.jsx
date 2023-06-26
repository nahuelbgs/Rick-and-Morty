import React from "react";
import './Search.css'

const Search = ({searchValue, setSearchValue}) => {
  const handleChange = (e) =>{
    setSearchValue(e.target.value)
  }
  return (
  <input value={searchValue} onChange={handleChange} className="search-bar" placeholder="Search..." />
  );
}

export default Search;
