import React from 'react';
//import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout/Layout';
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder';
import Checkout from '../src/containers/Checkout/Checkout';
import { Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Layout>
      <Switch>
        <Route path="/checkout" component={Checkout}/>
        <Route path="/" exact component={BurgerBuilder}/>        
      </Switch>      
    </Layout>
  );
}

export default App;
