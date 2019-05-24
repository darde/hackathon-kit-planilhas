import React from 'react';

const CardCalculoDeMargem = () => (
  <React.Fragment>
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
                <label for="inputRec3" class="col-sm-8 col-form-label">Número de vendas da empresa</label>
                <div class="col-sm-4">
                  <input type="text" class="form-control text-right" id="inputRec3" placeholder="0" />
                </div>
              </div>
              <div class="form-group row">
                <label for="inputRec45" class="col-sm-8 col-form-label">Preço médio por venda</label>
                <div class="col-sm-4">
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

        <div className="card shadow">
          <div className="card-body">
            <h4 className="pb-3">Despesa</h4>
            <form className="mb-n3">
              <div class="form-group row">
                <label for="inputRec45" class="col-sm-8 col-form-label">Custo total com vendas e comissão</label>
                <div class="col-sm-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">R$</div>
                    </div>
                    <input type="text" class="form-control text-right" id="inputRec45" placeholder="0,00" />
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputRec45" class="col-sm-8 col-form-label">Custo total de materia prima / P&D</label>
                <div class="col-sm-4">
                  <div class="input-group">
                    <div class="input-group-prepend">
                      <div class="input-group-text">R$</div>
                    </div>
                    <input type="text" class="form-control text-right" id="inputRec45" placeholder="0,00" />
                  </div>
                </div>
              </div>
              <div class="form-group row">
                <label for="inputRec45" class="col-sm-8 col-form-label">Custo de Atendimento e Administração / Operação / Manutenção</label>
                <div class="col-sm-4">
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
            <form className="mb-n3">
              <div className="form-group row mb-0">
                <label for="inputRec45" className="col-sm-8 col-form-label">
                  Quanto da margem (em R$) você vai disponibizar para Marketing?
                </label>
                <div className="col-sm-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">R$</div>
                    </div>
                    <input type="text" class="form-control text-right" id="inputRec45" placeholder="0,00" />
                  </div>
                </div>
              </div>
              <p className="small text-muted">Para ajudar nessa decisão, veja quanto tem investido hoje.</p>
              <div className="form-group row">
                <label for="inputRec45" className="col-sm-8 col-form-label">Investimento em Marketing no período</label>
                <div className="col-sm-4">
                  <div className="input-group">
                    <div className="input-group-prepend">
                      <div className="input-group-text">R$</div>
                    </div>
                    <input type="text" class="form-control text-right" id="inputRec45" placeholder="0,00" />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="card card-bg-gradient shadow">
          <div className="card-body">
            <h6 class="mb-2">
              Margem por venda antes do Marketing
            </h6>
            <span class="h2 mb-0">
              R$ 7.630,05
            </span>
          </div>
        </div>

        <div className="card card-bg-gradient shadow">
          <div className="card-body">
            <h6 class="mb-2">
              Quanto você investe de Marketing por venda
            </h6>
            <span class="h2 mb-0">
              R$ 30,05
            </span>
          </div>
        </div>

      </div>
    </div>
  </React.Fragment>
);

export default CardCalculoDeMargem;
