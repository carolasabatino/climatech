import React, { useState, useEffect } from 'react';
import './estilo.css';
import Map from './mapa';
import lluvia from '../iconos/lluvia.png';
import humedad from '../iconos/humedad.png';
import temperatura from '../iconos/temperatura.png';
import viento from '../iconos/viento.png';

function VerDatos() {
  const [currentDay, setCurrentDay] = useState('');

  useEffect(() => {
    const today = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
    const formattedDate = today.toLocaleDateString('es-ES', options);
    setCurrentDay(formattedDate);
  }, []);

  return (
    <div className="container">
      <div className='container_bienvenida'>
        <h1 className="mapa">MAPA</h1>
        <h1 className="localidad">(SELECCIONE UNA ESCUELA)</h1>
      </div>
      <div className="container_mapa">
        <Map />
      </div>
      <div className="container_valores">
        <table>
          <tbody>
            <tr>
              <td>
                <img src={temperatura} alt="Icono de temperatura" style={{ width: '43px', height: '42px' }} /> <h2 className="valores">0</h2>
              </td>
              <td>
                <h2 className="valores">0</h2>
              </td>
              <td>
                <img src={lluvia} alt="Icono de lluvia" style={{ width: '43px', height: '42px' }} /> <h2 className="valores">0</h2>
              </td>
              <td>
                <img src={humedad} alt="Icono de humedad" style={{ width: '43px', height: '42px' }} /> <h2 className="valores">0</h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="container_fecha">
        <table>
          <tbody>
            <tr>
              <td>
                <h2 className="fecha">{currentDay}</h2>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default VerDatos;
