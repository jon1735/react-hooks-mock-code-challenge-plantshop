import React from "react";
//step 3: you then pass the keys from parent component (plant list) (lines 9-12)
// you then use those keys in the properties listed below... (lines 7-9)
//by doing this, you will render the information on the browser
function PlantCard({ name, image, price }) {
  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {true ? (
        <button className="primary">In Stock</button>
      ) : (
        <button>Out of Stock</button>
      )}
    </li>
  );
}

export default PlantCard;
