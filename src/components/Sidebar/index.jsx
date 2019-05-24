import React from 'react';
import Navbar from '../Navbar';

const Sidebar = () => (
  <div className="sidebar-sticky">
    <ol className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          <span className="number-link-1">1. Meta de vendas e crescimento esperado</span> <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span className="number-link-2">2. Cálculo de Margem para orçamento de Marketing Digital</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span className="number-link-3">3. Orçamento para Marketing</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span className="number-link-4">4. Diagnóstico para Marketing</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span className="number-link-5">5. Definição de necessidades, ações e projetos</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          <span className="number-link-6">6. Orçamento detalhado de Marketing</span>
        </a>
      </li>
    </ol>
  </div>
);

export default Sidebar;
