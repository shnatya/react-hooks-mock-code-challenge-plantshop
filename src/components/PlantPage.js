import React, {useEffect, useState} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plantsDB, setPlantsDB] = useState([])
  const [searchName, setSearch] = useState("")
  
  useEffect(() =>
    fetch("http://localhost:6001/plants")
    .then(res => res.json()
    .then(plants => setPlantsDB(plants))
    )
    , [])

    function handleSubmit(newPlant){
      setPlantsDB([...plantsDB, newPlant])
    }

    function handleSearch(searchPlant){
      setSearch(searchPlant)
    }
    const plantsToDisplay = plantsDB.filter((plant) => {
      if(searchName === "")return true;
      return plant.name.includes(searchName)
    }
    )
  return (
    <main>
      <NewPlantForm handleSubmit = {handleSubmit}/>
      <Search handleSearch = {handleSearch}/>
      <PlantList plantsDB = {plantsToDisplay}/>
    </main>
  );
}

export default PlantPage;

