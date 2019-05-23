import React from 'react';
import Logo from '../../img/logo.svg';
import './styles.css';

const Navbar = () => (
  <nav className="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">
    <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">
      <img className="nav-bar-logo" src={Logo} alt="Logo Resultados Digitais"/>
    </a>
  </nav>
);

export default Navbar;
