import React from "react";
import PlantCard from "./PlantCard";
// in line 4, you pass in plants from plantPage which is your state
//you then write out a const and name it whatever you want
//you will then map through the information...inside the .map you return a single (plant)
function PlantList({ plants }) {
  const plantCollection = plants.map((plant) => (
    <PlantCard 
    key={plant.id}         //then you pass down the keys using the single plant object from line 7
    name={plant.name}
    image={plant.image}
    price={plant.price}
    />
  ))
  
  return (
    <ul className="cards">{plantCollection}</ul>
  );
}

export default PlantList;
