import React from 'react';
import Navbar from '../Navbar';

const Sidebar = () => (
  <div className="sidebar-sticky">
    <Navbar />
    <ol className="nav flex-column">
      <li className="nav-item">
        <a className="nav-link active" href="#">
          1. Meta de vendas e crescimento esperado <span className="sr-only">(current)</span>
        </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          2. Cálculo de Margem para orçamento de Marketing Digital
                  </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          3. Orçamento para Marketing
                  </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          4. Diagnóstico para Marketing
                  </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          5. Definição de necessidades, ações e projetos
                  </a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">
          6. Orçamento detalhado de Marketing
                  </a>
      </li>
    </ol>
  </div>
);

export default Sidebar;