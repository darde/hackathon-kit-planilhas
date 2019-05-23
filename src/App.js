import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />

      <div className="container-fluid">
        <div className="row">
          <div className="col col-sm-3">
            <h1>1. Meta de vendas e crescimento esperado</h1>
            <p>Insira, para todos os meses, o número de vendas do último ano.</p>
          </div>
          <div className="col col-sm-9">
            <h2>Número de vendas no último ano</h2>
            <p>* preencha todos os meses e para os não realizados ainda, coloque a expectativa</p>
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
            <hr />
            <p>No último ano, sua média de crescimento foi de <strong>3,56</strong>  %</p>
            <form class="form-inline">
              <div class="form-group">
                <label for="inputperc2">Para o próximo ano, você quer crescer ao mês:</label>
                <input value="3,54 %" type="text" id="inputperc2" class="form-control mx-sm-3" aria-describedby="prevperc" />
                <small id="prevperc" class="text-muted">
                  altere caso ache viável/necessário
                </small>
              </div>
            </form>
            <hr />
            <h3>Assim, sua projeção de vendas é:</h3>
            <table class="table table-bordered">
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
      </div>

    </div>
  );
}

export default App;
