import React from 'react';
import { Router, Route, Switch ,Link} from 'dva/router';
import IndexPage from './routes/IndexPage';
import CustomerPage from './routes/CustomerPage'
import CategoryPage from './routes/CategoryPage'
import ProductPage from './routes/ProductPage'
import WaiterPage from './routes/WaiterPage'
import AddressPage from './routes/AddressPage'
import CommentPage from './routes/CommentPage'
import Order from './routes/Order'
import OrderLine from './routes/OrderLine'
import styles from './router.css'

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <div className={styles.container}>
          <div className={styles["left-nav"]}>
            <div className={styles.title}>
              E洁家政管理系统
            </div>
              <ul>
                <li className={styles["nav-list-item"]}><Link to="/customer">顾客管理</Link></li>
                <li className={styles["nav-list-item"]}><Link to="/order">订单管理</Link></li>
                <li className={styles["nav-list-item"]}><Link to="/category">分类管理</Link></li>
                <li className={styles["nav-list-item"]}><Link to="/comment">评论管理</Link></li>
                <li className={styles["nav-list-item"]}><Link to="/product">服务管理</Link></li>
                <li className={styles["nav-list-item"]}><Link to="/waiter">工人管理</Link></li>
                <li className={styles["nav-list-item"]}><Link to="/orderline">订单项管理</Link></li>
              </ul>
          </div>
          <div className={styles["right-content"]}>
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
        </div>
      </div>
    </Router>
  );
}

export default RouterConfig;