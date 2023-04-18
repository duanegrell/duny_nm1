import React from "react";
import "./Search.css"

function Search({setSearch}) {
  return (
    <div className="search-container">
      <label htmlFor="search"></label>
      <input className="search-input"
        type="text"
        id="search"
        placeholder="Search..."
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default Search;