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
      <Route exact path="/planets" component={PlanetsPage} />
      <Route path="/planets/:id" component={PlanetPage} />
    </Switch>
  );
}
