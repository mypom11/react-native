import { configureStore } from '@reduxjs/toolkit'
import favorites from './favorites'

const store = configureStore({
  reducer: {
    favoriteMeals: favorites,
  },
})

export default store
