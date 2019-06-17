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
import { Layout, Menu, Breadcrumb, Icon } from 'antd';

function RouterConfig({ history }) {

  const { SubMenu } = Menu;
  const { Header, Content, Sider } = Layout;

  return (
    <Router history={history}>
      <Layout>
      <Header className="header">
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          style={{ lineHeight: '64px' }}
        >
        </Menu>
      </Header>
    <Layout>
          <Sider width={200} style={{ background: '#fff' }}>
            <Menu
              mode="inline"
              defaultSelectedKeys={['1']}
              defaultOpenKeys={['sub1']}
              style={{ height: '100%', borderRight: 0 }}
            >
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    顾客相关管理
                  </span>
                }
              >
                <Menu.Item key="1"><Link to ="/customer">顾客信息管理</Link></Menu.Item>
                <Menu.Item key="2"><Link to ="/address">顾客地址管理</Link></Menu.Item>
                <Menu.Item key="3"><Link to ="/comment">顾客评价管理</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="laptop" />
                    订单相关管理
                  </span>
                }
              >
                <Menu.Item key="5"><Link to = "/order">订单管理</Link></Menu.Item>
                <Menu.Item key="6"><Link to = "/orderline">订单项管理</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub3"
                title={
                  <span>
                    <Icon type="notification" />
                    产品相关管理
                  </span>
                }
              >
                <Menu.Item key="9"><Link to = "/product">产品管理</Link></Menu.Item>
                <Menu.Item key="10"><Link to = "/category">分类管理</Link></Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub4"
                title={
                  <span>
                    <Icon type="notification" />
                    服务人员管理
                  </span>
                }
              >
                <Menu.Item key="9"><Link to = "/waiter">服务人员管理</Link></Menu.Item>
              </SubMenu>
            </Menu>
          </Sider>
          <Layout style={{ padding: '0 24px 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Content
              style={{
                background: '#fff',
                padding: 24,
                margin: 0,
                minHeight: 280,
              }}
            >
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
            </Content>
          </Layout>
        </Layout>
      </Layout>
    </Router>
  );
}

export default RouterConfig;


