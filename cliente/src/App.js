import './App.css';
import './componentes/EstiloPagina.css';
import React from 'react';
import Location from './componentes/Location.jsx';
import ButtonLocation from './componentes/ButtonsLocation.jsx';
import VerDatos from './componentes/soo.jsx';

function App() {
  return (
    <div className="pagina">
      <Location />
      <ButtonLocation />
      <VerDatos/>
    </div>
  );
}

export default App;
