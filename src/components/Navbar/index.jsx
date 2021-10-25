import { NavLink } from "react-router-dom";
import { useContext } from "react";
import FavoritesContext from "../../store/favorites-context";

const Navbar = () => {
  const favoritesCtx = useContext(FavoritesContext);
  return (
    <nav className="navbar navbar-expand navbar-dark bg-danger">
      <div className="container-fluid">
        <NavLink className="navbar-brand bold" to="/">
          MeetUps
        </NavLink>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <NavLink
              className="nav-link"
              aria-current="page"
              to="/all-meet-ups"
            >
              All MeetUps
            </NavLink>
            <NavLink className="nav-link" to="/add-meet-ups">
              Add MeetUps
            </NavLink>
            <NavLink className="nav-link" to="/favorites">
              Favorites
              <span className="badge bg-secondary rounded-pill m-1">
                {favoritesCtx.totalfavorites}
              </span>
            </NavLink>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
