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

              <div className="row">
                <div className="col-12 col-xl-6">
                  <p className="px-2 pb-3">
                    Esta parte só vai funcionar se você tiver preenchido as abas de "Cálculo de margem" e "Metas e crescimento esperados"
                  </p>
                </div>
                <div className="col-12 col-xl-6">
                  <div className="card shadow">
                    <div className="card-body">
                      <h6 className="text-muted mb-2">
                        Orçamento anual:
                      </h6>
                      <div className="form-inline">
                        <div class="form-group">
                          <input
                            value={''}
                            type="text"
                            id=""
                            className="form-control mr-sm-3"
                            aria-describedby="prevperc"
                            />
                          <small id="" className="text-muted">

                          </small>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>

              <div class="card shadow">
                <div class="card-header">
                  <h4 class="card-header-title">Orçamento mês a mês</h4>
                </div>
                <div class="card-table">
                  <table class="table">
                    <thead>
                      <tr>
                        <th scope="col">Jan</th><th scope="col">Fev</th><th scope="col">Mar</th><th scope="col">Abr</th><th scope="col">Mai</th><th scope="col">Jun</th><th scope="col">Jul</th><th scope="col">Ago</th><th scope="col">Set</th><th scope="col">Out</th><th scope="col">Nov</th><th scope="col">Dez</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>0</td><td></td><td>321,00</td><td>321,00</td><td>321,00</td><td>321,00</td><td>321,00</td><td>321,00</td><td>321,00</td><td>321,00</td><td>321,00</td><td>321,00</td>
                      </tr>
                    </tbody>
                  </table>
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
