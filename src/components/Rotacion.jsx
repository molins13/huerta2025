import React, { useState, useEffect } from 'react';

function Rotacion() {
  const [rotaciones, setRotaciones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/Rotacion.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setRotaciones(data))
      .catch(error => {
        console.error("Error fetching rotación de cultivos:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos de rotación de cultivos.</div>;
  }

  return (
    <div>
      <h2>Rotación de Cultivos</h2>
      {rotaciones.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Cultivo Actual</th>
              <th>Cultivo Siguiente</th>
              <th>Motivo</th>
            </tr>
          </thead>
          <tbody>
            {rotaciones.map((rotacion, index) => (
              <tr key={index}>
                <td>{rotacion["Cultivo Actual"]}</td>
                <td>{rotacion["Cultivo Siguiente"]}</td>
                <td>{rotacion.Motivo}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Cargando datos de rotación de cultivos...</div>
      )}
    </div>
  );
}

export default Rotacion;