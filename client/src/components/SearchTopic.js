import React from "react";
import "./SearchTopic.css"

function SearchTopic({setSearch}) {
  return (
    <div className="search-container">
      <label htmlFor="search"></label>
      <input className="search-input"
        type="text"
        id="search"
        placeholder="Search Topic (MS, PD, TBI, CVA, SCI)"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchTopic;
