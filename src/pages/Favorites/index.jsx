import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";
import MeetUpList from "../../components/meetups/MeetUpList";

const Favorites = () => {
  const favoritesCtx = useContext(FavoritesContext);

  return <MeetUpList data={favoritesCtx.favorites} />;
};

export default Favorites;
