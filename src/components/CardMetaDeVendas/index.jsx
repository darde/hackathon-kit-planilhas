import React from 'react';

const getAverageGrowth = months =>
  Math.round(((Math.pow((months[10].value / months[0].value), (1 / 12)) - 1) * 100) * 100) / 100;

class CardMetaDeVendas extends React.Component {
  state = {
    averageGrowth: 0,
    forecastGrowth: 0,
    months: [
      { label: 'Jan', value: 0 },
      { label: 'Fev', value: 0 },
      { label: 'Mar', value: 0 },
      { label: 'Abr', value: 0 },
      { label: 'Mai', value: 0 },
      { label: 'Jun', value: 0 },
      { label: 'Jul', value: 0 },
      { label: 'Ago', value: 0 },
      { label: 'Set', value: 0 },
      { label: 'Out', value: 0 },
      { label: 'Nov', value: 0 },
      { label: 'Dez', value: 0 },
    ],
    monthsProjection: [
      { label: 'Jan', value: 0 },
      { label: 'Fev', value: 0 },
      { label: 'Mar', value: 0 },
      { label: 'Abr', value: 0 },
      { label: 'Mai', value: 0 },
      { label: 'Jun', value: 0 },
      { label: 'Jul', value: 0 },
      { label: 'Ago', value: 0 },
      { label: 'Set', value: 0 },
      { label: 'Out', value: 0 },
      { label: 'Nov', value: 0 },
      { label: 'Dez', value: 0 },
    ],
  };

  getMonthProjection(monthProjection) {
    const { months, forecastGrowth, monthsProjection } = this.state;

    if (monthProjection === 'Jan') {
      monthsProjection.find(item => {
        if (item.label === 'Jan') {
          item.value = parseInt(months[10].value + months[10].value * forecastGrowth);
        }
      })
      
      return monthsProjection.find(item => item.label === 'Jan').value;
    } else {
      const monthProjectionObject = monthsProjection.find(item => item.label === monthProjection);
      const monthProjectionIndex = monthsProjection.indexOf(monthProjectionObject);
      console.log('index: ', monthProjectionIndex - 1);
      monthsProjection.find(item => {
        if (item === monthProjection) {
          item.value = parseInt(months[monthProjectionIndex - 1].value + months[monthProjectionIndex -1].value * forecastGrowth);
        }
      })
      return 333;
    }
  }

  handleOnChange = (e) => {
    if (e.target.value < 0) {
      return;
    }

    const newMonths = this.state.months.slice();

    newMonths.every(item => {
      if (item.label === e.target.id) {
        item.value = Number(e.target.value);
        return false;
      }
      return true;
    });

    const averageGrowth = getAverageGrowth(newMonths);

    this.setState({
      months: newMonths.slice(),
      averageGrowth:
        averageGrowth > 0 && averageGrowth !== Infinity
          ? averageGrowth : "",
      forecastGrowth:
        averageGrowth > 0 && averageGrowth !== Infinity
          ? averageGrowth : "",
    });
  };

  render() {
    const { averageGrowth, months, forecastGrowth } = this.state;

    return (
      <React.Fragment>
        <h2 className="pt-4 pb-3 px-1">1. Meta de vendas e crescimento esperado</h2>
        <div className="card">
          <div className="card-body">
            <h4>Número de vendas no último ano</h4>
            <p>Insira, para todos os meses*, o número de vendas do último ano.</p>
            <form>
              <div className="form-row" id="months">
                {
                  months.slice(0,6).map(month => (
                    <div className="form-group col-sm-2" key={month.label}>
                      <label htmlFor={month.label}>{month.label}</label>
                      <input
                        type="number"
                        className="form-control"
                        id={month.label}
                        value={month.value}
                        onChange={this.handleOnChange}
                      />
                    </div>    
                  ))
                }
              </div>
              <div className="form-row">
                {
                  months.slice(6).map(month => (
                    <div className="form-group col-sm-2" key={month.label}>
                      <label htmlFor={month.label}>{month.label}</label>
                      <input
                        type="number"
                        className="form-control"
                        id={month.label}
                        value={month.value}
                        onChange={this.handleOnChange}
                      />
                    </div>
                  ))
                }
              </div>
            </form>
            <small className="text-muted">* preencha todos os meses e para os não realizados ainda, coloque a expectativa</small>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-xl-6">
            <div className="card">
              <div className="card-body">
                <h6 className="text-muted mb-2">No último ano, sua média de crescimento foi de</h6>
                <span className="h2 mb-0">
                  { averageGrowth > 0 && `${averageGrowth}%` }
                </span>
              </div>
            </div>
          </div>
          <div className="col-12 col-xl-6">
            <div className="card">
              <div className="card-body">
                <h6 className="text-muted mb-2">
                  Para o próximo ano, você quer crescer ao mês:
                    </h6>
                <input
                  value={forecastGrowth > 0 && `${forecastGrowth}%`}
                  type="text"
                  id="inputperc2"
                  className="form-control mx-sm-2"
                  aria-describedby="prevperc"
                />
                <small id="prevperc" className="text-muted mx-sm-3">
                  altere caso ache viável/necessário
                    </small>
                <form className="form-inline sr-only">
                  <div className="form-group">
                    <input
                      value="3,54 %"
                      type="text"
                      id="inputperc2"
                      className="form-control mx-sm-3"
                      aria-describedby="prevperc"
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="card">
          <div className="card-header">
            <h4 className="card-header-title">Assim, sua projeção de vendas é:</h4>
          </div>
          <div className="card-table">
            <table className="table">
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
                  <td>{this.getMonthProjection('Jan')}</td>
                  <td>{this.getMonthProjection('Fev')}</td>
                  <td>{this.getMonthProjection('Mar')}</td>
                  <td>{this.getMonthProjection('Abr')}</td>
                  <td>{this.getMonthProjection('Mai')}</td>
                  <td>{this.getMonthProjection('Jun')}</td>
                  <td>{this.getMonthProjection('Jul')}</td>
                  <td>{this.getMonthProjection('Ago')}</td>
                  <td>{this.getMonthProjection('Set')}</td>
                  <td>{this.getMonthProjection('Out')}</td>
                  <td>{this.getMonthProjection('Nov')}</td>
                  <td>{this.getMonthProjection('Dez')}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CardMetaDeVendas;