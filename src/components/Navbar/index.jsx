import React from 'react';
import Logo from '../../img/logo.svg';
import './styles.css';

const Navbar = () => (
  <div className="nav-bar">
    <a href="http://resultadosdigitais.com.br/?_ga=2.208080594.1504104183.1558619295-607056563.1558619294">
      <img className="nav-bar-logo" src={Logo} alt="Logo Resultados Digitais"/>
    </a>
  </div>
);

export default Navbar;
