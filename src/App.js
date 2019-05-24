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
      <div className="container-fluid" id="main-container">
        <div className="row p-0">
          <div className="col-md-2 p-0">
            <Sidebar />
          </div>
          <div className="col-md-10 p-0">
            <main role="main" className="py-0 px-3" data-spy="scroll" data-target="#navbar-example2" data-offset="0">
              <CardMetaDeVendas />
              <CardCalculoDeMargem />

              <div id="part3">
                <h2 className="pt-5 pb-3 px-1 m-0">
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

                </div>
                <div id="part4">

                  <h2 className="pt-5 pb-3 px-1 m-0">
                    <span className="number-title number-title-4">4</span> Diagnóstico para Marketing
                    </h2>

                    <div className="row">
                      <div className="col-12 col-xl-4">
                        <p className="px-2 pb-3">Liste aqui quais você acredita que são os maiores objetivos e oportunidades de Marketing Digital para sua empresa.</p>
                        <p className="px-2 pb-3 text-muted">Para fazer o diagnóstico de Marketing e identificar as maiores oportunidades para sua empresa, consulte:</p>
                        <ul className="mb-0">
                          <li>
                            <a target="_blank" href="http://ferramentas.resultadosdigitais.com.br/funil-de-vendas/">
                              Benchmarking do Funil de Vendas
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="http://ferramentas.resultadosdigitais.com.br/diagnostico-marketing-vendas/">
                              Diagnóstico de Marketing e Vendas
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="http://www.raioxdomarketing.com.br/">
                              Raio-X do Marketing
                            </a>
                          </li>
                          <li>
                            <a target="_blank" href="http://ferramentas.resultadosdigitais.com.br/diagnostico-cac/">
                              Diagnóstico de CAC
                            </a>
                          </li>
                        </ul>
                      </div>
                      <div className="col-12 col-xl-8">
                        <div className="card shadow">
                          <div className="card-body">
                            <h4 className="mb-3">Objetivos para o ano</h4>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">1.</div>
                              </div>
                              <input type="text" className="form-control" id="goal1" />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">2.</div>
                              </div>
                              <input type="text" className="form-control" id="goal2" />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">3.</div>
                              </div>
                              <input type="text" className="form-control" id="goal3" />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">4.</div>
                              </div>
                              <input type="text" className="form-control" id="goal4" />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">5.</div>
                              </div>
                              <input type="text" className="form-control" id="goal5" />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">6.</div>
                              </div>
                              <input type="text" className="form-control" id="goal6" />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">7.</div>
                              </div>
                              <input type="text" className="form-control" id="goal7" />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">8.</div>
                              </div>
                              <input type="text" className="form-control" id="goal8" />
                            </div>
                            <div className="input-group mb-3">
                              <div className="input-group-prepend">
                                <div className="input-group-text">9.</div>
                              </div>
                              <input type="text" className="form-control" id="goal9" />
                            </div>
                            <div className="input-group">
                              <div className="input-group-prepend">
                                <div className="input-group-text">10.</div>
                              </div>
                              <input type="text" className="form-control" id="goal10" />
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>

                  </div>
                  <div id="part5">

                    <h2 className="pt-5 pb-3 px-1 m-0">
                      <span className="number-title number-title-5">5</span> Definição de necessidades, ações e projetos
                      </h2>
                      <div className="row">
                        <div className="col-12 col-xl-4">
                          <p className="px-2 pb-3">Trace aqui as ações que considerar necessárias de acordo com o seu diagnóstico e planejamento.</p>
                        </div>
                        <div className="col-12 col-xl-6">
                          <p className="px-2 pb-3">Boa parte das ações indicadas já vem com uma sugestão de orçamento que é geral e baseada em pesquisas. Altere caso considere necessário ao seu caso:</p>
                        </div>
                      </div>

                      <div className="card shadow">
                        <div className="card-body">

                          <h4 className="mb-4">Ações recorrentes</h4>

                          <h6>Produção de 4 posts para o blog</h6>
                          <div className="form-row ml-2">
                            <div className="col">
                              <label for="">Quantas vezes /mês</label>
                              <select id="" className="form-control">
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col">
                              <label for="">Quem faz?</label>
                              <select id="" className="form-control">
                                <option selected>in house</option>
                                <option>terceirizado</option>
                              </select>
                            </div>
                            <div className="col">
                              <label for="">Quando começa?</label>
                              <select id="" className="form-control">
                                <option selected>Janeiro</option>
                                <option>Fevereiro</option>
                                <option>...</option>
                              </select>
                            </div>
                            <div className="col">
                              <label for="">Custo unitário</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <div className="input-group-text">R$</div>
                                </div>
                                <input type="text" className="form-control text-right" id="" placeholder="0,00" />
                              </div>
                            </div>
                            <div className="col">
                              <label for="">Custo estimado</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <div className="input-group-text">R$</div>
                                </div>
                                <input type="text" className="form-control text-right" id="" placeholder="0,00" disabled="disabled" />
                              </div>
                            </div>
                          </div>

                          <h6 className="mt-4">Gestão de mídias sociais (publicações + monitoramento 1x dia)</h6>
                          <div className="form-row ml-2">
                            <div className="col">
                              <label for="">Quantas vezes /mês</label>
                              <select id="" className="form-control">
                                <option selected>1</option>
                                <option>2</option>
                                <option>3</option>
                                <option>4</option>
                                <option>5</option>
                              </select>
                            </div>
                            <div className="col">
                              <label for="">Quem faz?</label>
                              <select id="" className="form-control">
                                <option selected>in house</option>
                                <option>terceirizado</option>
                              </select>
                            </div>
                            <div className="col">
                              <label for="">Quando começa?</label>
                              <select id="" className="form-control">
                                <option selected>Janeiro</option>
                                <option>Fevereiro</option>
                                <option>...</option>
                              </select>
                            </div>
                            <div className="col">
                              <label for="">Custo unitário</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <div className="input-group-text">R$</div>
                                </div>
                                <input type="text" className="form-control text-right" id="" placeholder="0,00" />
                              </div>
                            </div>
                            <div className="col">
                              <label for="">Custo estimado</label>
                              <div className="input-group">
                                <div className="input-group-prepend">
                                  <div className="input-group-text">R$</div>
                                </div>
                                <input type="text" className="form-control text-right" id="" placeholder="0,00" disabled="disabled" />
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>

                    </div>
                    <div id="part6">

                      <h2 className="pt-5 pb-3 px-1 m-0">
                        <span className="number-title number-title-6">6</span> Orçamento detalhado de Marketing
                        </h2>

                        <div className="card shadow">
                          <div className="card-body">

                            <table className="table table-sm small m-0">
                              <thead>
                                <tr>
                                  <th scope="col"></th>
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
                                  <th scope="row">Total indicado pela diretoria</th>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                </tr>
                                <tr>
                                  <th scope="row">Total estimado pelo Marketing</th>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                </tr>
                                <tr>
                                  <th scope="row">Pessoal</th>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                  <td>R$ 0,00</td>
                                </tr>
                              </tbody>
                            </table>

                          </div>
                        </div>

                      </div>

                      <hr />
                      <h3> Compartilhe a ferramenta nas redes sociais</h3>
                      <p>Quanto mais empresas preencherem o diagnóstico, melhor e mais confiável ficará o seu relatório.</p>
                      <p class="social-media">
                        <a href="" class="btn btn-primary mr-2"><i class="fa fa-facebook"></i> Facebook</a>
                        <a href="" class="btn btn-primary mr-2"><i class="fa fa-twitter"></i> Twitter</a>
                        <a href="" class="btn btn-primary mr-2"><i class="fa fa-linkedin"></i> LinkedIn</a>
                      </p>

                      <hr />
                      <p className="small text-muted">Feito com ♥ pelo time da Resultados Digitais</p>

                    </main>



          </div>

        </div>
      </div>
    </div>
  );
}
export default App;
