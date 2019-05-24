import React from 'react';

const CardCalculoDeMargem = () => (
  <React.Fragment>
    <h2 className="pt-4 pb-3 px-1">2. Cálculo de Margem para orçamento de Marketing Digital</h2>
    <div className="card">
      <div className="card-body">
        <p>Nessa parte, você vai colocar os dados de receitas e despesas da sua empresa em um determinado período para chegar a um valor de Marketing por produto vendido. Esse valor servirá como base para determinar o orçamento.</p>
      </div>
    </div>

    <div className="row">
      <div className="col-12 col-xl-6">
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">Receita</h4>
          </div>
          <div className="card-body">
            <form>
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
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">Despesa</h4>
          </div>
          <div className="card-body">
          </div>
        </div>
      </div>
    </div>
  </React.Fragment>
);

export default CardCalculoDeMargem;
