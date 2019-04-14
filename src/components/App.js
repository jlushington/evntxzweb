import React, { Component } from 'react';
import {BrowserRouter  as Router, Route} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';
import {connect} from 'react-redux';

import {addToCart} from './actions/cartActions';

//PAGES
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';
import ProductDetail from './Pages/Product/ProductDetail';
import Cart from './Pages/Cart/Cart';

class App extends Component {

  constructor(props){
    super(props);
    this.store = this.props.store;
  }
  render() {
    return (

    <Router>
      <div className="cover-container text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />

          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>
          <Route path="/productdetail/:iD" exact component={ProductDetail}></Route>
          <Route path="/cart" component={Cart}/>

        
        <Footer />

      </div>
    </Router>


    );
  }
}



export default  App;
