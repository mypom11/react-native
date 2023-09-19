import { createContext, useState } from 'react'

export const FavoritesContext = createContext({
  ids: [],
  addFavorite: (id) => {},
  removeFavorite: (id) => {},
})

const FavoriteContextProvider = ({ children }) => {
  const [favoriteMealIds, setFavoriteMealIds] = useState([])

  const addFavorite = (id) => {
    setFavoriteMealIds((prevState) => [id, ...prevState])
  }

  const removeFavorite = (id) => {
    setFavoriteMealIds((prevState) => prevState.filter((favId) => favId == !id))
  }

  const value = {
    ids: favoriteMealIds,
    addFavorite,
    removeFavorite,
  }

  return (
    <FavoritesContext.Provider value={value}>
      {children}
    </FavoritesContext.Provider>
  )
}

export default FavoriteContextProvider
