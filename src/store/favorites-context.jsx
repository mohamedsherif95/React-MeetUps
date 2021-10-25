import { createContext, useState } from "react";

const FavoritesContext = createContext({
  favorites: [],
  totalfavorites: 0,
  addFavorite: (newFavorite) => {},
  removeFavorite: (meetupId) => {},
  isFavorite: (meetupId) => {},
});

export const FavoritesContextProvider = (props) => {
  const [userFavorites, setUserFavorites] = useState([]);

  const addFavoriteHandler = (newFavorite) => {
    setUserFavorites((userFavorites) => {
      return [...userFavorites, newFavorite];
    });
  };
  const removeFavoriteHndler = (meetupId) => {
    setUserFavorites((userFavorites) => {
      return userFavorites.filter((meetup) => meetup.id !== meetupId);
    });
  };
  const isFavoriteHandler = (meetupId) => {
    return context.favorites.some((meetup) => meetup.id === meetupId);
  };

  const context = {
    favorites: userFavorites,
    totalfavorites: userFavorites.length,
    addFavorite: addFavoriteHandler,
    removeFavorite: removeFavoriteHndler,
    isFavorite: isFavoriteHandler,
  };

  return (
    <FavoritesContext.Provider value={context}>
      {props.children}
    </FavoritesContext.Provider>
  );
};

export default FavoritesContext;
