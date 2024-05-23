

const NombreMascota = ({ value, onChange }) => {
  return (
    <div>
      <p id="nombreMascotaDesc">Introduce el nombre de tu mascota:</p>
      <input
        type="text"
        id="nombreMascota"
        name="nombreMascota"
        aria-describedby="nombreMascotaDesc"
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default NombreMascota;

