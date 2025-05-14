import React from 'react';
import ReactDOM from 'react-dom/client'; // Para React 18+ usa createRoot
import './index.css'; // Si tienes un archivo de estilos globales
import App from './App.jsx'; // Importamos el componente principal de la app

// Obtén el elemento donde se va a renderizar la app, el cual debe existir en index.html
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
