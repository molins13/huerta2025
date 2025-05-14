import React, { useState, useEffect } from 'react';

function CalendarioTareas() {
  const [tareas, setTareas] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/CalendarioTareas.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setTareas(data))
      .catch(error => {
        console.error("Error fetching calendario de tareas:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos del calendario de tareas.</div>;
  }

  return (
    <div>
      <h2>Calendario de Tareas</h2>
      {tareas.length > 0 ? (
        <table>
          <thead>
            <tr>
              <th>Fecha</th>
              <th>Tarea</th>
              <th>Recomendación</th>
              <th>Materiales</th>
            </tr>
          </thead>
          <tbody>
            {tareas.map((tarea, index) => (
              <tr key={index}>
                <td>{tarea.Fecha}</td>
                <td>{tarea.Tarea}</td>
                <td>{tarea.Recomendación}</td>
                <td>{tarea.Materiales}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Cargando calendario de tareas...</div>
      )}
    </div>
  );
}

export default CalendarioTareas;