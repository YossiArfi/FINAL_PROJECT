import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from 'react-bootstrap'
import Footer from './components/Footer'
import Header from './components/Header'
import HomeScreen from './screens/HomeScreen'
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UserListScreen';
import UserEditScreen from './screens/UserEditScreen';
import ProductListScreen from './screens/ProductListScreen';
import ProductEditScreen from './screens/ProductEditScreen';
import OrderListScreen from './screens/OrderListScreen';
import DiveSuitsScreen from './screens/DiveSuitsScreen';
import AccessoriesScreen from './screens/AccessoriesScreen';
import StoreScreen from './screens/StoreScreen';
import ContactScreen from './screens/ContactScreen';
import NotFoundScreen from './screens/NotFoundScreen';

const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Switch>
            <Route path='/order/:id' component={OrderScreen} />
            <Route path='/shipping' component={ShippingScreen} />
            <Route path='/payment' component={PaymentScreen} />
            <Route path='/placeorder' component={PlaceOrderScreen} />
            <Route path='/login' component={LoginScreen} />
            <Route path='/register' component={RegisterScreen} />
            <Route path='/profile' component={ProfileScreen} />
            <Route path='/store' component={StoreScreen} />
            <Route path='/contact' component={ContactScreen} />
            <Route path='/product/:id' component={ProductScreen} />
            <Route path='/divesuits' component={DiveSuitsScreen} exact />
            <Route path='/divesuits/:pageNumber' component={DiveSuitsScreen} exact />
            <Route path='/accessories' component={AccessoriesScreen} exact />
            <Route path='/accessories/:pageNumber' component={AccessoriesScreen} exact />
            <Route path='/cart/:id?' component={CartScreen} />
            <Route path='/admin/userlist' component={UserListScreen} />
            <Route path='/admin/user/:id/edit' component={UserEditScreen} />
            <Route path='/admin/productlist' component={ProductListScreen} exact />
            <Route path='/admin/productlist/:pageNumber' component={ProductListScreen} exact />
            <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
            <Route path='/admin/orderlist' component={OrderListScreen} />
            <Route path='/search/:keyword' component={HomeScreen} exact />
            <Route path='/page/:pageNumber' component={HomeScreen} />
            <Route path='/search/:keyword/page/:pageNumber' component={HomeScreen} />
            <Route path='/' component={HomeScreen} exact />
            <Route component={NotFoundScreen} exact />
          </Switch>
        </Container>
      </main>

      <Footer />
    </Router>
  )
}

export default App
