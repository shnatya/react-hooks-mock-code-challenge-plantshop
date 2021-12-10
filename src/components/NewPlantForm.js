import React, { useState } from "react";
//import { useState } from "react/cjs/react.development";

function NewPlantForm({handleSubmit}) {
  const [plantObj, setPlantObj] = useState({})

  function handleChange(event){
    const newPlant = {
      ...plantObj,
      [event.target.name]: event.target.value,
    }
    setPlantObj(newPlant)
  }

  function onSubmit(event){
    event.preventDefault();
    fetch("http://localhost:6001/plants", {
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(plantObj)
    })
    .then(res => res.json())
    .then(newPlant => handleSubmit(newPlant))
  }
  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit = {onSubmit}>
        <input onChange = {handleChange} type="text" name="name" placeholder="Plant name" />
        <input onChange = {handleChange} type="text" name="image" placeholder="Image URL" />
        <input onChange = {handleChange} type="number" name="price" step="0.01" placeholder="Price" />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
