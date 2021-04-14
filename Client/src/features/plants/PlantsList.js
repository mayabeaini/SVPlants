import React from 'react'
import { useSelector } from 'react-redux'
import Plants from './Plants'

export const PlantsList = () => {
  const plants = useSelector((state) => state.plants)

  const renderedPlants = plants.map((plant) => <Plants plant={plant} />)

  return (
    <section>
      <h2 style={{ marginLeft: '60px', marginTop: '40px' }}>Plants</h2>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-evenly',
          flexWrap: 'wrap',
          margin: '30px',
        }}
      >
        {renderedPlants}
      </div>
    </section>
  )
}
