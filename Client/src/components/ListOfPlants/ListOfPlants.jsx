import React from "react";
import planty from "../../media/plant.png";

export default function ListOfPlants({
  plant,
  buttonClicks,
}) {
  const buttonStyle = (status) => {
    if (status === "Water") {
      return "pink";
    } else if (status === "Watering") {
      return "purple";
    } else if (status === "Must Water") {
      return "red";
    } else if (status === "Just Watered") {
      return "green";
    }
  };
  return (
    <div
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <img
        src={planty}
        alt="a plant"
        style={{
          width: "100px",
          backgroundColor: "#faf0e6",
          borderRadius: 10,
        }}
      />
      <h3>{plant.plantName}</h3>
      <button
        style={{
          backgroundColor: buttonStyle(plant.plantStatus),
          borderRadius: 5,
          border: "none",
          outline: "none",
          fontWeight: "bold",
          color: "white",
          width: "100%",
          fontSize: "20px",
          height: "30px",
        }}
        onClick={() =>
          buttonClicks(plant.timestamp, plant.id, plant.plantStatus)
        }
      >
        {plant.plantStatus}
      </button>
    </div>
  );
}
