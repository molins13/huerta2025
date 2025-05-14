import React, { useState, useEffect } from 'react';

function GlosarioAcciones() {
  const [acciones, setAcciones] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/glosario_acciones.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setAcciones(data))
      .catch(error => {
        console.error("Error fetching glosario de acciones:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos del glosario de acciones.</div>;
  }

  return (
    <div>
      <h2>Glosario de Acciones</h2>
      {acciones.length > 0 ? (
        <ul>
          {acciones.map((accion, index) => (
            <li key={index}>
              <strong>{accion.Acción}:</strong> {accion.Descripción}
            </li>
          ))}
        </ul>
      ) : (
        <div>Cargando glosario de acciones...</div>
      )}
    </div>
  );
}

export default GlosarioAcciones;