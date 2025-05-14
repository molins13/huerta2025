import React, { useState, useEffect } from 'react';

export default function Asociaciones() {
  const [asociaciones, setAsociaciones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/Asociaciones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setAsociaciones(data))
      .catch(error => {
        console.error("Error fetching asociaciones de cultivos:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar la información de asociaciones de cultivos.</div>;
  }

  return (
    <div>
      <h2>Asociaciones de Cultivos</h2>
      <p>Información completa sobre asociaciones beneficiosas entre cultivos:</p>
      {asociaciones.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Cultivo</th>
              <th>Compañero Beneficioso</th>
              <th>Beneficios de la Asociación</th>
            </tr>
          </thead>
          <tbody>
            {asociaciones.map((asociacion, index) => (
              <tr key={index}>
                <td>{asociacion.Cultivo}</td>
                <td>{asociacion["Compañero Beneficioso"]}</td>
                <td>{asociacion["Beneficios de la Asociación"]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Cargando información de asociaciones...</div>
      )}
    </div>
  );
}