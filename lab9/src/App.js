import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Tutors from "./components/Tutors";
import Commerce from "./components/Commerce";
import Error from "./components/Error";
import Navigation from "./components/Navigation";
import About from "./components/About";
import Evaluations from "./components/Evaluations";
import French from "./components/FrenchHome";
import STEM from "./components/STEM";
import Social from "./components/Social";
import Arts from "./components/Arts";

import Home from "./components/Home";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/tutors" component={Tutors} />
            <Route path="/commerce" component={Commerce} />
            <Route path="/about" component={About} />
            <Route path="/evaluations" component={Evaluations} />
            <Route path="/french" component={French} />
            <Route path="/stem" component={STEM} />
            <Route path="/social" component={Social} />
            <Route path="/arts" component={Arts} />
            <Route component={Error} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
