import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <nav className="navbar">
      <h1>Veterinaria Amigos Peludos</h1>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/mascotas">Mascotas</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
