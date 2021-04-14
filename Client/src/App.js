import React from 'react'
import { PlantsList } from './features/plants/PlantsList'
import StatusBar from './app/StatusBar'

function App() {
  return (
    <div>
      <h1 style={{ display: 'flex', justifyContent: 'center' }}>
        ShipVista Plants
      </h1>
      <div style={{ display: 'flex', margin: "20px" }}>
        <StatusBar />
        <PlantsList />
      </div>
    </div>
  )
}

export default App
