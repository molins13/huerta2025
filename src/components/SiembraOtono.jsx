import React, { useState, useEffect } from 'react';

function SiembraOtono() {
  const [siembras, setSiembras] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/siembraotono')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setSiembras(data))
      .catch(error => {
        console.error("Error fetching siembra otoño-invierno:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos de siembra otoño-invierno.</div>;
  }

  return (
    <div>
      <h2>Siembra Otoño-Invierno</h2>
      {siembras.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Cultivo</th>
              <th>Fecha Recomendada de Siembra</th>
              <th>Germinación</th>
            </tr>
          </thead>
          <tbody>
            {siembras.map((siembra, index) => (
              <tr key={index}>
                <td>{siembra.Cultivo}</td>
                <td>{siembra["Fecha Recomendada de Siembra"]}</td>
                <td>{siembra.Germinación}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Cargando datos de siembra otoño-invierno...</div>
      )}
    </div>
  );
}

export default SiembraOtono;