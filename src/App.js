import React from 'react';
import logo from './logo.svg';
import icone2 from './img/icone.svg';
import './App.css';
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

          </nav>


          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 p-4">
            <h2 className="mt-4 mb-3 mx-0 p-0">
              <span className="number-title number-title-1">1</span> Meta de vendas e crescimento esperado
            </h2>
            <div className="card shadow">
              <div className="card-body">

              <h4>Número de vendas no último ano</h4>
              <p>Insira, para todos os meses*, o número de vendas do último ano.</p>
              <form>
                <div className="form-row">
                  <div className="form-group col-sm-2">
                    <label for="#">Jan</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Fev</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Mar</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Abr</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Mai</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Jun</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group col-sm-2">
                    <label for="#">Jul</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Ago</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Set</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Out</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Nov</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                  <div className="form-group col-sm-2">
                    <label for="#">Dez</label>
                    <input type="number" className="form-control" id="#" placeholder="0" />
                  </div>
                </div>
              </form>
              <small class="text-muted">* preencha todos os meses e para os não realizados ainda, coloque a expectativa</small>
            </div>
            </div>

            <div className="row">
              <div className="col-12 col-xl-6">
                <div className="card shadow">
                  <div className="card-body">
                    <h6 class="text-muted mb-2">
                      No último ano, sua média de crescimento foi de
                    </h6>
                    <span class="h2 mb-0">
                      763.5 <small>%</small>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="card shadow">
                  <div className="card-body">
                    <h6 class="text-muted mb-2">
                      Para o próximo ano, você quer crescer ao mês:
                    </h6>
                    <span class="h2 mb-0">
                      763.5 <small>%</small>
                    </span>
                    <small id="prevperc" class="text-muted mx-sm-3">
                       altere caso ache viável/necessário
                    </small>
                    <form class="form-inline sr-only">
                      <div class="form-group">
                        <input value="3,54 %" type="text" id="inputperc2" class="form-control mx-sm-3" aria-describedby="prevperc" />

                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>



            <div className="card shadow">
            <div className="card-header">
              <h4 className="card-header-title">Assim, sua projeção de vendas é:</h4>
            </div>
            <div className="card-table">
              <table class="table">
                <thead>
                  <tr>
                    <th scope="col">Jan</th>
                    <th scope="col">Fev</th>
                    <th scope="col">Mar</th>
                    <th scope="col">Abr</th>
                    <th scope="col">Mai</th>
                    <th scope="col">Jun</th>
                    <th scope="col">Jul</th>
                    <th scope="col">Ago</th>
                    <th scope="col">Set</th>
                    <th scope="col">Out</th>
                    <th scope="col">Nov</th>
                    <th scope="col">Dez</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                    <td>321,00</td>
                  </tr>
                </tbody>
              </table>
            </div>
            </div>

            <h2 className="mt-5 mb-3 mx-0 p-0">
              <span className="number-title number-title-2">2</span> Cálculo de Margem para orçamento de Marketing Digital
            </h2>
            <p className="px-2 pb-3">Nessa parte, você vai colocar os dados de receitas e despesas da sua empresa em um determinado período para chegar a um valor de Marketing por produto vendido. Esse valor servirá como base para determinar o orçamento.</p>


            <div className="row">
              <div className="col-12 col-xl-6">
                <div className="card shadow">
                  <div className="card-body">
                    <h4 className="pb-3">Receita</h4>
                    <form className="mb-n3">
                      <div class="form-group row">
                        <label for="inputRec3" class="col-sm-7 col-form-label">Número de vendas da empresa</label>
                        <div class="col-sm-5">
                          <input type="text" class="form-control text-right" id="inputRec3" placeholder="0" />
                        </div>
                      </div>
                      <div class="form-group row">
                        <label for="inputRec45" class="col-sm-7 col-form-label">Preço médio por venda</label>
                        <div class="col-sm-5">
                          <div class="input-group">
                            <div class="input-group-prepend">
                              <div class="input-group-text">R$</div>
                            </div>
                            <input type="text" class="form-control text-right" id="inputRec45" placeholder="0,00" />
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
              <div className="col-12 col-xl-6">
                <div className="card shadow">
                  <div className="card-body">
                    <h4 className="pb-3">Despesa</h4>
                  </div>
                </div>
              </div>
            </div>

            <div className="card shadow">
              <div className="card-body">
              </div>
            </div>

            // area 3

            <h2 className="mt-5 mb-3 mx-0 p-0">
              <span className="number-title number-title-3">3</span> Orçamento para Marketing
            </h2>

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
