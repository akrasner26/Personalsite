import React,{ Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render(){
  return(
    <header>
    <div className="logo">
      LOGO
    </div>

<div className="menu">
    <nav>
    <ul class="flex-container row">
      <li class="home">
      <Link to="/">Home</Link>
        </li>

        <li class="projects">
        <Link to="/Projects">Projects</Link>
        </li>

        <li class="contact">
        <Link to="/">Contact</Link>
          </li>
          </ul>
    </nav>
    </div>


    </header>



  );

}
}

export default Header;
