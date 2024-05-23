

const NombreMascota = ({ value, onChange }) => {
    return (
        <div>
            <p id="nombreMascotaDesc"></p>
            <input
                type="text"
                id="nombreMascota"
                name="nombreMascota"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default NombreMascota;

