import {
  Switch,
  Route,
} from 'react-router-dom';

import HomePage from './pages/HomePage';
import SignPage from './pages/SignPage';
import SignUpCompletePage from './pages/SignUpCompletePage';
import LoginPage from './pages/LoginPage';
import PlanetsPage from './pages/PlanetsPage';
import PlanetPage from './pages/PlanetPage';

export default function Router() {
  return (
    <Switch>
      <Route exact path="/" component={HomePage} />
      <Route path="/sign" component={SignPage} />
      <Route path="/sign-complete" component={SignUpCompletePage} />
      <Route path="/login" component={LoginPage} />
      <Route exact path="/planets" component={PlanetsPage} />
      <Route path="/planets/:id" component={PlanetPage} />
    </Switch>
  );
}
