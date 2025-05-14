import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', backgroundColor: '#e0ffe0' }}>
      <Link to="/">Calendario</Link> |{" "}
      <Link to="/glosario">Glosario</Link> |{" "}
      <Link to="/siembra">Siembra Otoño</Link> |{" "}
      <Link to="/lluvias">Plan Lluvias</Link> |{" "}
      <Link to="/asociaciones">Asociaciones</Link> |{" "}
      <Link to="/rotacion">Rotación</Link> |{" "}
      <Link to="/plantas">Plantas</Link> |{" "}
      <Link to="/bibliografia">Bibliografía</Link>
    </nav>
  );
}