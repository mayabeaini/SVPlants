import React from "react";

//////////////////////////////////
// ADD MORE DETAILS TO STATUS
/////////////////////////////////
export default function StatusBar() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-evenly",
        alignItems: "center",
        width: "100vw",
        borderTop: "1px solid black",
        borderBottom: "1px solid black",
        marginBottom: "50px",
        padding: 0,
      }}
    >
      <h1>Status Bar</h1>
      <h5
        style={{
          backgroundColor: "pink",
          color: "white",
          fontSize: "19px",
          padding: "23px",
          margin: "15px 0",
        }}
      >
        Water
      </h5>
      <h5
        style={{
          backgroundColor: "purple",
          color: "white",
          fontSize: "19px",
          padding: "23px",
          margin: "15px 0",
        }}
      >
        Watering
      </h5>
      <h5
        style={{
          backgroundColor: "green",
          color: "white",
          fontSize: "19px",
          padding: "23px",
          margin: "15px 0",
        }}
      >
        Just Watered
      </h5>
      <h5
        style={{
          backgroundColor: "red",
          color: "white",
          fontSize: "19px",
          padding: "23px",
          margin: "15px 0",
        }}
      >
        Must Water
      </h5>
    </div>
  );
}
