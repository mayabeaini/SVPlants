import React from 'react'
import { useSelector } from 'react-redux'
import Plants from './Plants'

export const PlantsList = () => {
  const plants = useSelector((state) => state.plants)

  const renderedPlants = plants.map((plant) => <Plants plant={plant} />)

  return (
    <section>
      <h2>Plants</h2>
      <div style={{display:"flex", justifyContent: "space-evenly", flexWrap: "wrap", margin: "50px"}}>{renderedPlants}</div>
    </section>
  )
}
