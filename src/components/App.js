import React from "react";
import "bootstrap/dist/css/bootstrap.css";

//for the router
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch
} from "react-router-dom";

import ScrollToTop from "./ScrollToTop";
import img404 from "../404.jpg";

//custom containers
import ListContainer from "../containers/ListContainer";

const NavLinks = () => (
  <div className="NavLinks">
    <NavLink activeClassName="active" className="btn btn-primary" exact to="/">
      Home
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      exact
      to="/films/pages/1"
    >
      Films
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      to="/people/pages/1"
    >
      People
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      to="/planets/pages/1"
    >
      Planets
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      to="/species/pages/1"
    >
      Species
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      to="/starships/pages/1"
    >
      Starships
    </NavLink>{" "}
    <NavLink
      activeClassName="active"
      className="btn btn-primary"
      to="/vehicles/pages/1"
    >
      Vehicles
    </NavLink>
  </div>
);

const App = () => (
  <Router>
    <ScrollToTop>
      <NavLinks />

      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <div>
              <h1>Welcome to SWAPI</h1>
              <iframe
                src="https://brorlandi.github.io/StarWarsIntroCreator/#!/AL21i2y_rQkWr4U735_M"
                width="100%"
                height="800px"
                title="crawl"
              />
            </div>
          )}
        />
        <Route exact path="/films/pages/:page" component={ListContainer} />
        <Route exact path="/people/pages/:page" component={ListContainer} />
        <Route exact path="/planets/pages/:page" component={ListContainer} />
        <Route exact path="/species/pages/:page" component={ListContainer} />
        <Route exact path="/starships/pages/:page" component={ListContainer} />
        <Route exact path="/vehicles/pages/:page" component={ListContainer} />
        <Route render={() => <img src={img404} alt="404 page not found" />} />
      </Switch>
    </ScrollToTop>
  </Router>
);

export default App;
