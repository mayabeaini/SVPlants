import React from 'react'
import { plantUpdated } from './plantsSlice'
import planty from '../../media/plant.png'
import { useDispatch } from 'react-redux'

let clearTimeoutVariable

export default function Plants({ plant }) {
  const dispatch = useDispatch()

  const buttonClicks = (time, status, name) => {
    const time_subtraction = Date.now() - time
    // do an enumerate for the status options
    if (time_subtraction < 30000 && status === 'Just Watered') {
      return null
    } else if (status === 'Must Water' || status === 'Water') {
      dispatch(
        plantUpdated({
          id: plant.id,
          plantName: name,
          plantStatus: 'Watering',
          timestamp: Date.now(),
        })
      )
      const tenSecondInterval = () => {
        dispatch(
          plantUpdated({
            id: plant.id,
            plantName: name,
            plantStatus: 'Just Watered',
            timestamp: Date.now(),
          })
        )

        const toSetState = () => {
          dispatch(
            plantUpdated({
              id: plant.id,
              plantName: name,
              plantStatus: 'Water',
              timestamp: Date.now(),
            })
          )
        }

        setTimeout(toSetState, 30000)
      }
      clearTimeoutVariable = setTimeout(tenSecondInterval, 10000)
    } else if (time_subtraction < 10000 && status === 'Watering') {
      clearTimeout(clearTimeoutVariable)
      dispatch(
        plantUpdated({
          id: plant.id,
          plantName: name,
          plantStatus: 'Just Watered',
          timestamp: Date.now(),
        })
      )

      const toSetState = () => {
        dispatch(
          plantUpdated({
            id: plant.id,
            plantName: name,
            plantStatus: 'Water',
            timestamp: Date.now(),
          })
        )
      }
      setTimeout(toSetState, 30000)
    } else {
      dispatch(
        plantUpdated({
          id: plant.id,
          plantName: name,
          plantStatus: 'Watering',
          timestamp: Date.now(),
        })
      )
    }
  }

  const buttonStyle = (status) => {
    if (status === 'Water') {
      return '#f765a3'
    } else if (status === 'Watering') {
      return '#a155b9'
    } else if (status === 'Must Water') {
      return '#ff3403'
    } else if (status === 'Just Watered') {
      return '#165baa'
    }
  }
  return (
    <div
      style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin:"20px" }}
    >
      <img
        src={planty}
        alt="a plant"
        style={{
          width: '100px',
          backgroundColor: '#faf0e6',
          borderRadius: 10,
        }}
      />
      <h3>{plant.plantName}</h3>
      <button
        style={{
          backgroundColor: buttonStyle(plant.plantStatus),
          borderRadius: 5,
          border: 'none',
          outline: 'none',
          fontWeight: 'bold',
          color: 'white',
          width: '100%',
          fontSize: '15px',
          height: '40px',
        }}
        onClick={() =>
          buttonClicks(plant.timestamp, plant.plantStatus, plant.plantName)
        }
      >
        {plant.plantStatus}
      </button>
    </div>
  )
}
