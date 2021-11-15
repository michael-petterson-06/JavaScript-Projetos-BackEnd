import React from 'react';

import { Route, Switch, Router } from 'react-router-dom';
import Edit from './component/Edit';
import Home from './pages/Home';

import history from './history';

function App() {
  return (
    <div className="body">
     <Router history={history}>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/Edit" component={ Edit } />
      </Switch>
     </Router> 
    </div>
  );
}

export default App;
