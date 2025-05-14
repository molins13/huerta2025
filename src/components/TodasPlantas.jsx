import React, { useState, useEffect } from 'react';

function TodasPlantas() {
  const [semillero, setSemillero] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/TodasPlantas.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setSemillero(data))
      .catch(error => {
        console.error("Error fetching semillero España:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos del semillero de España.</div>;
  }

  return (
    <div>
      <h2>Semillero España</h2>
      {semillero.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Planta</th>
              <th>Siembra (semillero)</th>
              <th>Recolección</th>
            </tr>
          </thead>
          <tbody>
            {semillero.map((planta, index) => (
              <tr key={index}>
                <td>{planta.Planta}</td>
                <td>{planta["Siembra (semillero)"]}</td>
                <td>{planta.Recolección}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Cargando datos del semillero de España...</div>
      )}
    </div>
  );
}

export default TodasPlantas;