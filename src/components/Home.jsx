import React from 'react';
import './Home.css'; 

function Home() {
  return (
    <div className="home-container">
      <header className="home-header">
        <h1>Bienvenidos a Veterinaria Amigos Peludos</h1>
        <p>¡Cuidamos de tu mascota como si fuera nuestra!</p>
      </header>

      <div className="home-content">
        <div className="home-info">
          <h2>Servicios Especializados</h2>
          <p>Ofrecemos atención médica para todas las mascotas, desde consultas generales hasta procedimientos quirúrgicos.</p>
        </div>
        <div className="home-image">
          <img src="public/imagen.jpg" alt="Mascotas" />
        </div>
      </div>
    </div>
  );
}

export default Home;
