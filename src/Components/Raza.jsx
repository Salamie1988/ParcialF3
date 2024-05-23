import React from "react";

const RazaMascota = ({ value, onChange }) => {
    return (
        <div>
            <p id="razaMascotaDesc"></p>
            <input
                type="text"
                id="razaMascota"
                name="razaMascota"
                value={value}
                onChange={onChange}
            />
        </div>
    );
};

export default RazaMascota;
