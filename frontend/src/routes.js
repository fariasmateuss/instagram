import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Feed from './pages/Feed/Feed';
import New from './pages/New/New';

function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Feed} />
      <Route path='/new' component={New} />
    </Switch>
  );
}

export default Routes;