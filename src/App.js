import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
// import logo from './newLogo.png';
// import './App.css';
import Header from './components/header';
import Footer from './components/footer';
import Home from './pages/home';
import Projects from './pages/projects';
import Contact from './pages/contact';
import './css/stylesheet.scss';


class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">

      <Header />

      <Route exact path='/' component={Home} />
      <Route exact path='/Projects' component={Projects} />
      <Route exact path='/Contact' component={Contact} />

      <Footer />

      </div>
      </Router>
    );
  }
}

export default App;
