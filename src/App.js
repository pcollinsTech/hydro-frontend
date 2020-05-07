import React from "react";
import {
  BrowserRouter as Router,
  // Switch,
  Route,
} from "react-router-dom";
import "./assets/sass/app.scss";

//Pages
import Index from "./pages/index";
import About from "./pages/groups";
import GetStarted from "./pages/play";
import Stays from "./pages/stays";
import Explore from "./pages/explore";
import Events from "./pages/events";
import ActivityState from "./context/activity/ActivityState";

const App = () => {
  // const searchExchanges = state => {};
  return (
    <ActivityState>
      <Router>
        <Route exact path="/" render={(props) => <Index {...props} />} />
        <Route exact path="/stays" render={(props) => <Stays {...props} />} />
        <Route
          exact
          path="/get-started"
          render={(props) => <GetStarted {...props} />}
        />
        <Route exact path="/about" render={(props) => <About {...props} />} />
        <Route
          exact
          path="/explore"
          render={(props) => <Explore {...props} />}
        />
        <Route
          exact
          path="/events/:slug"
          render={(props) => <Events {...props} />}
        />
      </Router>
    </ActivityState>
  );
};

export default App;
