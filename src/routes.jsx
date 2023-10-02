import { Switch, Route } from 'react-router-dom';

import Home from './pages/Home/index';
import NewContact from './pages/NewContact/newContact';
import EditContact from './pages/EditContact/editContact';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home}>
        <Home />
      </Route>
      <Route path="/new" component={NewContact}>
        <NewContact />
      </Route>
      <Route path="/edit/:id" component={EditContact}>
        <EditContact />
      </Route>
    </Switch>
  );
}
