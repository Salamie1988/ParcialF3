import React from "react";

const Card = ({ nombre, raza }) => {
  return (
    <div>
      <h2>Datos de la Mascota</h2>
      <p>Nombre: {nombre}</p>
      <p>Raza: {raza}</p>
    </div>
  );
};

export default Card;

