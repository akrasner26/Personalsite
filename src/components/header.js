import React, { Component } from 'react';

import {
  Link
} from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <div class="header-container">


        <div className="logo">
          <img src={require('../newLogo.png')}></img>
        </div>

        <div className="menu">
          <div class="list-item">
            Home 
          </div>
          <div class="list-item">
            Projects
          </div>
          <div class="list-item">
            Contact 
          </div>
        </div>

      </div>



    );

  }
}

export default Header;
