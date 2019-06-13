import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage'
import CategoryPage from './routes/CategoryPage'
import ProductPage from './routes/ProductPage'
import WaiterPage from './routes/WaiterPage'
import AddressPage from './routes/AddressPage'
import CommentPage from './routes/CommentPage'
import Order from './routes/Order'
import OrderLine from './routes/OrderLine'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/customer" exact component={CustomerPage} />
        <Route path="/category" exact component={CategoryPage} />
        <Route path="/comment" exact component={CommentPage} />
        <Route path="/product" exact component={ProductPage} />
        <Route path="/waiter" exact component={WaiterPage} />
       <Route path="/address" exact component={AddressPage} />
        <Route path="/order" exact component={Order} />
        <Route path="/orderline" exact component={OrderLine} />
      </Switch>
    </Router>
  );
}

export default RouterConfig;