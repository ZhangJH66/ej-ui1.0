import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage'
import ProductPage from './routes/ProductPage'
import WaiterPage from './routes/WaiterPage'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/customer" exact component={CustomerPage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/waiter" exact component={WaiterPage} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;