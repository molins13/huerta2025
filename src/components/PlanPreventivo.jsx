import React, { useState, useEffect } from 'react';

function Bibliografia() {
  const [libros, setLibros] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/data/Bibliografia.json')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => setLibros(data))
      .catch(error => {
        console.error("Error fetching bibliografía:", error);
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error al cargar los datos de la bibliografía.</div>;
  }

  return (
    <div>
      <h2>Bibliografía</h2>
      {libros.length > 0 ? (
        <ul>
          {libros.map((libro, index) => (
            <li key={index}>
              <strong>{libro.Título}</strong> - {libro.Autor}, <em>{libro.Editorial}</em> ({libro.Referencia})
            </li>
          ))}
        </ul>
      ) : (
        <div>Cargando bibliografía...</div>
      )}
    </div>
  );
}

export default Bibliografia;