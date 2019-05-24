import React from 'react';
import Navbar from '../Navbar';

const Sidebar = () => (
  <nav className="sidebar py-4 px-2" id="navbar-example2">
    <ol className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#part1">
          <span className="number-link-1">1. Meta de vendas e crescimento esperado</span> <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#part2">
          <span className="number-link-2">2. Cálculo de Margem para orçamento de Marketing Digital</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#part3">
          <span className="number-link-3">3. Orçamento para Marketing</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#part4">
          <span className="number-link-4">4. Diagnóstico para Marketing</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#part5">
          <span className="number-link-5">5. Definição de necessidades, ações e projetos</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#part6">
          <span className="number-link-6">6. Orçamento detalhado de Marketing</span>
        </a>
      </li>
    </ol>
  </nav>
);

export default Sidebar;
