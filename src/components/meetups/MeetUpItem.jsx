import { useContext } from "react";

import FavoritesContext from "../../store/favorites-context";

const MeetUpItem = (props) => {
  const favoritesCtx = useContext(FavoritesContext);
  const meetupIsFavorite = favoritesCtx.isFavorite(props.id);

  const toggleFavoritesHandler = function () {
    if (meetupIsFavorite) {
      favoritesCtx.removeFavorite(props.id);
    } else {
      favoritesCtx.addFavorite({
        title: props.title,
        address: props.address,
        description: props.description,
        image: props.image,
        id: props.id,
      });
    }
  };

  return (
    <div className="card shadow-lg mb-5 bg-body rounded text-center m-auto mt-3 col-5">
      <img src={props.image} className="card-img-top" alt="..." />
      <div className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <p className="card-text">{props.address}</p>
        <p className="card-text">{props.description}</p>
        <button className="btn btn-danger" onClick={toggleFavoritesHandler}>
          {meetupIsFavorite ? "Remove From Favorite" : "Add To Favorites"}
        </button>
      </div>
    </div>
  );
};

export default MeetUpItem;
