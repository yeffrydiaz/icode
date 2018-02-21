import React, { Component } from 'react';
import Logo from './img/logo.png';
import './css/Navbar.css';

export default class Navbar extends Component {
  render() {
    return (
      <header className="headerBar">
        <a
          href="/"
          className="logo"
          title="Home">
          <img
            title="iCode logo"
            className="logoImg"
            src={Logo}
            alt="icode log"
          />iCode
        </a>
        <a
          href="/"
          className="menuItem"
          title="Opcions">
         Opcions
        </a>
      </header>
    );
  }
}
