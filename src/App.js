import React from 'react';
import Sidebar from './components/Sidebar';
import CardMetaDeVendas from './components/CardMetaDeVendas';
import CardCalculoDeMargem from './components/CardCalculoDeMargem';
import './App.css';
import icone2 from './img/icone.svg';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <section className="jumbotron-sticky jumbotron px-2 pb-1 d-flex flex-row rounded-0 m-0">
        <figure className="jumbotron-figure m-0">
          <img src={icone2} className="img-responsive" alt="Calculadora de Teste A/B" />
        </figure>
        <article className="jumbotron-title m-0">
          <h1 className="mt-2 mb-1 p-0">Orçamento do Marketing</h1>
          <p className="p-0 m-0">Crie seu Orçamento de Marketing Digital.</p>
        </article>
      </section>
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block sidebar">
            <Sidebar />
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 p-4">
            <CardMetaDeVendas />
            <CardCalculoDeMargem />

              <h2 className="mt-5 mb-3 mx-0 p-0">
                <span className="number-title number-title-3">3</span> Orçamento para Marketing
              </h2>
              <p className="px-2 pb-3">
                Esta parte só vai funcionar se você tiver preenchido as abas de "Cálculo de margem" e "Metas e crescimento esperados"
              </p>

              <div className="card shadow">
                <div className="card-body">
                </div>
              </div>

              <div className="card shadow">
                <div className="card-body">
                </div>
              </div>


              <h2 className="mt-5 mb-3 mx-0 p-0">
                <span className="number-title number-title-4">4</span> Diagnóstico para Marketing
              </h2>

              <div className="card shadow">
                <div className="card-body">
                </div>
              </div>


              <h2 className="mt-5 mb-3 mx-0 p-0">
                <span className="number-title number-title-5">5</span> Definição de necessidades, ações e projetos
              </h2>

              <div className="card shadow">
                <div className="card-body">
                </div>
              </div>


              <h2 className="mt-5 mb-3 mx-0 p-0">
                <span className="number-title number-title-6">6</span> Orçamento detalhado de Marketing
              </h2>

              <div className="card shadow">
                <div className="card-body">
                </div>
              </div>

          </main>
        </div>
      </div>
    </div>
  );
}
export default App;
