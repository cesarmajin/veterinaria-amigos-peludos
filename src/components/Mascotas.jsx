import React, { useState, useEffect } from 'react';

function Mascotas() {
  const [mascotas, setMascotas] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds')
      .then((response) => response.json())
      .then((data) => {
        setMascotas(data);
        setLoading(false);
      })
      .catch((error) => console.error('Error:', error));
  }, []);

  if (loading) {
    return <p>Cargando...</p>;
  }

  return (
    <section className="mascotas">
      <h3>Lista de Razas de Perros</h3>
      <ul>
        {mascotas.map((mascota, index) => (
          <li key={index}>
            <h4>{mascota.name}</h4>
            <p>Temperamento: {mascota.temperament}</p>
            <p>Años de vida: {mascota.life_span}</p>
            {mascota.image && <img src={mascota.image.url} alt={mascota.name} width="200" />}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Mascotas;

