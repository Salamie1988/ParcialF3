import React from "react";

const RazaMascota = ({ value, onChange }) => {
  return (
    <div>
      <p id="razaMascotaDesc">Introduce la raza de tu mascota:</p>
      <input
        type="text"
        id="razaMascota"
        name="razaMascota"
        aria-describedby="razaMascotaDesc"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default RazaMascota;
