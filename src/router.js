import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage'
import CategoryPage from './routes/CategoryPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/customer" exact component={CustomerPage} />
        <Route path="/category" exact component={CategoryPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;