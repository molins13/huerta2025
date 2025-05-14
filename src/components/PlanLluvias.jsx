import React, { useState, useEffect } from 'react';

function PlanLluvias() {
  const [plan, setPlan] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/PlanLluvias.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setPlan(data))
      .catch(error => {
        console.error("Error fetching plan post-lluvia:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos del plan post-lluvia.</div>;
  }

  return (
    <div>
      <h2>Plan Post-Lluvia</h2>
      {plan.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Días después de la lluvia</th>
              <th>Acción</th>
              <th>Duración Estimada</th>
              <th>Materiales</th>
            </tr>
          </thead>
          <tbody>
            {plan.map((item, index) => (
              <tr key={index}>
                <td>{item["Días después de la lluvia"]}</td>
                <td>{item.Acción}</td>
                <td>{item["Duración Estimada"]}</td>
                <td>{item.Materiales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Cargando datos del plan post-lluvia...</div>
      )}
    </div>
  );
}

export default PlanLluvias;