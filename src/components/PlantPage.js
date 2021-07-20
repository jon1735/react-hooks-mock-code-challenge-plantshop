import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {

  const [plants, setPlants] = useState([])  //we start off by setting up the state. We use an empty array because we have an array of objects 
  const [plantSearch, setPlantSearch] = useState("") //we need to set up the state for the filter function

  useEffect(() => {
    fetch("http://localhost:6001/plants")   //we then useEffect to start our fetch from the data base. (look at defenders notes for fetch layout)
      .then(r => r.json())
      .then(data => setPlants(data))
  }, [])

//const handleAddPlant is what we're going to be using in the second ".then" in the POST method
//once we have this function written out, we need to pass it down into the component in the return (line 24)

  const handleAddPlant = (addPlant) => {
    setPlants([...plants, addPlant])
  }


  const setPlantFilter = plants.filter((plant) => {
    // if (plantSearch === "") {
    //   return true 
    // } else {
      // debugger
      return plant.name.toLowerCase().includes(plantSearch.toLowerCase())
  // }
})


  return (
    <main>
      <NewPlantForm 
        addPlant={handleAddPlant}
      />
      <Search 
        plantSearch={plantSearch}
        onChangePlantSearch={setPlantSearch}
      />
      <PlantList 
        plants={setPlantFilter}     // for lines 20&21, we then pass the state down to the child component from line 8
        setPlants={setPlants}
        
      />
    </main>
  );
}

export default PlantPage;
