import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plantsDB}) {
  return (
    <ul className="cards">{
      /* render PlantCards components in here */
      plantsDB.map((plant) => (<PlantCard key = {plant.id} plant = {plant} />))
      }</ul>
  );
}

export default PlantList;
