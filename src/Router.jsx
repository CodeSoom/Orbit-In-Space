import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import PlanetsPage from "./pages/PlanetsPage";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/planets" component={PlanetsPage} />
    </Switch>
  );
}
