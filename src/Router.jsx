import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import PlanetsPage from './pages/PlanetsPage';
import PlanetPage from './pages/PlanetPage';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/planets" component={PlanetsPage} />
      <Route path="/planet" component={PlanetPage} />
    </Switch>
  );
}
