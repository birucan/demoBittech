import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './pages/homePage.js';
import NavBar from './headerComponent/navBar.js';
import Footer from './footerComponent/footer.js';
import CryptoPage from './pages/cryptoPage.js';
import LoginPage from './pages/loginPage.js';
import Product from './pages/product.js';

class App extends Component {
  render() {


    return (

      <Router>
        <div>
          <NavBar />

          <Route name="Home" exact path="/" component={HomePage} />
          <Route name="crypto" exact path="/crypto" component={CryptoPage} />
          <Route name="login" exact path="/login" component={LoginPage} />
          <Route name="product" exact path="/product" component={Product} />

          <Footer />
        </div>
      </Router>

    )
  }
}

export default App;
