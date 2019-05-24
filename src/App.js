import React from 'react';
import Sidebar from './components/Sidebar';
import CardMetaDeVendas from './components/CardMetaDeVendas';
import CardCalculoDeMargem from './components/CardCalculoDeMargem';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container-fluid">
        <div className="row">
          <nav className="col-md-2 d-none d-md-block sidebar">
            <Sidebar />
          </nav>
          <main role="main" className="col-md-9 ml-sm-auto col-lg-10 p-4">
            <CardMetaDeVendas />
            <CardCalculoDeMargem />
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;
