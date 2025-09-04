import { configureStore } from '@reduxjs/toolkit'
import exampleReducer from './slices/exampleSlice'

// Create the store
export const store = configureStore({
  reducer: {
    example: exampleReducer,
  },
})

// Infer types for RootState & AppDispatch
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
