import React, {useState} from "react";
//set up use state for the formData (lines 6-11)
// you then pass the keys used in the parent component but set them equal to empty strings


//need to pass "add plant from the child component"
function NewPlantForm({ addPlant }) {

  const [formData, setFormData] = useState ({
    name: "",
    image: "",
    price: "",
  })

//you then set up the handleChange event... pass "event" as the argument
//then you use the spread operator to go over "formData"
//you then target the values (line21)

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value
    })
  }

//then you set up the handle submit function
//prevent devault action from occurring (line 29)
//set up a function within the function that allows you to add a new plant
// set the keys equal to the formData.(name,image,price)*or whatever they are named*
//you then use a fetch POST method (lines 40-49) (this allows you to add/post information to the existing data base)
//on the second (.then) you need to pass in information from the parent component 
  const handleSubmit = (event) => {
    event.preventDefault()

    const addNewPlant ={
      name: formData.name,
      image: formData.image,
      price: formData.price
    }  
    
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      Accept: "application/json"
      },
      body: JSON.stringify(addNewPlant)
    })
        .then (r => r.json())
        .then(addPlant)
  }

//in lines 58-60, they were once uncontrolled components, we can make then controlled
//by assigning the "value" to the "formData.(name,image,price) *or whatever you call them"
//on line 59, we are using a "onSubmit", it needs to be added to the FORM
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" placeholder="Plant name" value={formData.name} onChange={handleChange}/>   
        <input type="text" name="image" placeholder="Image URL" value={formData.image} onChange={handleChange}/>
        <input type="number" name="price" step="0.01" placeholder="Price" value={formData.price} onChange={handleChange}/>
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
