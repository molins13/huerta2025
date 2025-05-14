import React, { useState, useEffect } from 'react';

function LeyendaColores() {
  const [leyenda, setLeyenda] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/leyenda_colores.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setLeyenda(data))
      .catch(error => {
        console.error("Error fetching leyenda de colores:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos de la leyenda de colores.</div>;
  }

  return (
    <div>
      <h2>Leyenda de Colores</h2>
      {leyenda.length > 0 ? (
        <ul>
          {leyenda.map((item, index) => (
            <li key={index}>
              <span style={{ backgroundColor: item.Color, padding: '5px', marginRight: '10px', color: 'white' }}>
                {item["Tipo de tarea"]}
              </span>
              - {item.Color}
            </li>
          ))}
        </ul>
      ) : (
        <div>Cargando leyenda de colores...</div>
      )}
    </div>
  );
}

export default LeyendaColores;