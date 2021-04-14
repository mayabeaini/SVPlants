import {
    createSlice,
    // createAsyncThunk,
    // createEntityAdapter,
  } from "@reduxjs/toolkit";
  
  const initialState = [
    {
      timestamp: 1618274087486,
      plantName: "Name1",
      id: 1,
      plantStatus: "Water",
    },
    {
      timestamp: 1618274087486,
      plantName: "Name2",
      id: 2,
      plantStatus: "Must Water",
    },
    {
      timestamp: 1618252487486,
      plantName: "Name3",
      id: 3,
      plantStatus: "Must Water",
    },
    {
      timestamp: 1618274087486,
      plantName: "Name4",
      id: 4,
      plantStatus: "Must Water",
    },
    {
      timestamp: 1618274087486,
      plantName: "Name5",
      id: 5,
      plantStatus: "Must Water",
    },
  ];
  const plantsSlice = createSlice({
    name: 'plants',
    initialState,
    reducers: {
      plantUpdated (state, action){
        const {id, plantName, plantStatus, timestamp} = action.payload
        const existingPlant = state.find (plant => plant.id === id)
        if(existingPlant){
          existingPlant.plantName = plantName
          existingPlant.plantStatus = plantStatus
          existingPlant.timestamp = timestamp
        }
      }
    }
  })
  
  export const {plantUpdated} = plantsSlice.actions
  export default plantsSlice.reducer