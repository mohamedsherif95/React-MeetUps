import { Route, Switch, Redirect } from "react-router-dom";

import AllMeetUps from "./pages/AllMeetUps";
import AddMeetUps from "./pages/AddMeetUps";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/all-meet-ups">
            <AllMeetUps />
          </Route>
          <Route path="/add-meet-ups">
            <AddMeetUps />
          </Route>
          <Route path="/favorites">
            <Favorites />
          </Route>
          <Route path="/">
            <Redirect to="/all-meet-ups" />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default App;
