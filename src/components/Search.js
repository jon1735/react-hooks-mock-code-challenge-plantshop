import React from "react";

function Search({ plantSearch, onChangePlantSearch }) {
  const handlePlantSearchChange = (event) => {
    onChangePlantSearch(event.target.value)  
  } 
  return (
    <div className="searchbar">
      <label htmlFor="search">Search Plants:</label>
      <input
        value={plantSearch}
        type="text"
        id="search"
        placeholder="Type a name to search..."
        onChange={handlePlantSearchChange}
      />
    </div>
  );
}

export default Search;
