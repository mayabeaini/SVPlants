import {
  createSlice,
  // createAsyncThunk,
  // createEntityAdapter,
} from '@reduxjs/toolkit'

const initialState = [
  {
    id: 1,
    plantName: 'Bacopa',
    plantStatus: 'Water',
    timestamp: 1618427341396,
  },
  {
    id: 2,
    plantName: 'Daylily',
    plantStatus: 'Must Water',
    timestamp: 1618427341396,
  },
  {
    id: 3,
    plantName: 'Petunia',
    plantStatus: 'Water',
    timestamp: 1618427341396,
  },
  {
    id: 4,
    plantName: 'Peony',
    plantStatus: 'Water',
    timestamp: 1618427341396,
  },
  {
    id: 5,
    plantName: 'Sunflower',
    plantStatus: 'Must Water',
    timestamp: 1618427341396,
  },
]
const plantsSlice = createSlice({
  name: 'plants',
  initialState,
  reducers: {
    plantUpdated(state, action) {
      const { id, plantName, plantStatus, timestamp } = action.payload
      const existingPlant = state.find((plant) => plant.id === id)
      if (existingPlant) {
        existingPlant.plantName = plantName
        existingPlant.plantStatus = plantStatus
        existingPlant.timestamp = timestamp
      }
    },
  },
})

export const { plantUpdated } = plantsSlice.actions
export default plantsSlice.reducer
