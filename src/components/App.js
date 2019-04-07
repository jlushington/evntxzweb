import React, { Component } from 'react';
import {BrowserRouter  as Router, Route, Link} from 'react-router-dom';
import './App.css';
import Header from './Header/Header';
import Footer from './Footer/Footer';

//PAGES
import Home from './Pages/Home/Home';
import Signup from './Pages/Signup/Signup';
import Login from './Pages/Login/Login';

class App extends Component {
  render() {
    return (
    <Router>
      <div className="cover-container text-center d-flex w-100 h-100 p-3 mx-auto flex-column">
        <Header />

          <Route path="/" exact component={Home}></Route>
          <Route path="/signup" exact component={Signup}></Route>
          <Route path="/login" exact component={Login}></Route>

        
        <Footer />

      </div>
    </Router>

    );
  }
}

export default App;
