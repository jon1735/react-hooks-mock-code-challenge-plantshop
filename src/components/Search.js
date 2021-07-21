import React from "react";

//then we pass the props into the search function from the parent component, "plantPage"
//then we set a const (7-8) which is a function that is an event, which is passed down into line 20
//"handlePlantSearchChange" is actually like "onChangeplantSearch"

function Search({ plantSearch, onChangePlantSearch }) {
  const handlePlantSearchChange = (event) => {
    onChangePlantSearch(event.target.value)  
  } 

  //line 18 is the actual event listener which is passed down from the function above.
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
