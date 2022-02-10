import React from 'react';
import  {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import './App.css';
import Header from './components/Header/Header';
import ManageInventory from './components/Inventory/ManageInventory';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Product from './components/Product/Product';
import Review from './components/Review/Review';
import Shop from './components/Shop/Shop';
import ProductDetails from './ProductDetails/ProductDetails';

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route path='/shop'>
            <Shop></Shop>
          </Route>
          <Route path='/OrderReview'>
            <Review></Review>
          </Route>
          <Route path='/ManageInventory'>
            <ManageInventory></ManageInventory>
          </Route>
          <Route path="/product/:productKey">
            <ProductDetails></ProductDetails>
          </Route>
          <Route exact path='*'>
            <PageNotFound></PageNotFound>
          </Route>
          
        </Switch>
      </Router>

      
      
    </div>
  );
}

export default App;
