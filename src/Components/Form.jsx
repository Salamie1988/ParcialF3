import React, { useState } from "react";
import Card from "./Card";

const FormData = () => {
  const [nombreMascota, setNombreMascota] = useState("");
  const [razaMascota, setRazaMascota] = useState("");
  const [errors, setErrors] = useState({});
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const validationErrors = {};

    if (nombreMascota.length < 3 || /^\s/.test(nombreMascota)) {
      validationErrors.nombreMascota = "Por favor chequea que la información sea correcta.";
    }

    if (razaMascota.length < 6) {
      validationErrors.razaMascota = "Por favor chequea que la información sea correcta.";
    }

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
    } else {
      setErrors({});
      setFormSubmitted(true);
      console.log("Formulario enviado correctamente", { nombreMascota, razaMascota });
    }
  };

  return (
    <div className="App">
      <h1>Datos de mi Mascota</h1>
      <form onSubmit={handleSubmit}>
        <label>Nombre de la Mascota:</label>
        <input
          type="text"
          value={nombreMascota}
          onChange={(e) => setNombreMascota(e.target.value)}
        />
        {errors.nombreMascota && <p style={{ color: "red" }}>{errors.nombreMascota}</p>}
        <label>Raza de la Mascota:</label>
        <input
          type="text"
          value={razaMascota}
          onChange={(e) => setRazaMascota(e.target.value)}
        />
        {errors.razaMascota && <p style={{ color: "red" }}>{errors.razaMascota}</p>}
        <br />
        <button type="submit">Enviar</button>
      </form>
      {formSubmitted && <Card nombre={nombreMascota} raza={razaMascota} />}
    </div>
  );
};

export default FormData;
