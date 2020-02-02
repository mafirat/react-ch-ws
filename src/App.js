import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import Navbar from './components/Navbar';
import Results from './components/results/Results';
import Challenges from './components/challenges/Challenges';
import SpeedCheck from './components/speedcheck/SpeedCheck';

function App() {
  return (
    <div className="container pt-1">
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/results" component={Results} />
          <Route exact path="/challenges" component={Challenges} />
          <Route exact path="/" component={SpeedCheck} />
          <Redirect to="/" />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
