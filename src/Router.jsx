import React from 'react';

import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import ObjectFormPage from "./pages/ObjectFormPage";

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/object" component={ObjectFormPage} />
    </Switch>
  );
}
