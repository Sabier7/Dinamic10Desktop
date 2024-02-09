import React, { useState } from 'react';

const VolumeControl = () => {
    const [volume, setVolume] = useState(50);

    const handleVolumeChange = (e) => {
        setVolume(e.target.value);
        // Aquí podrías implementar la lógica para ajustar el volumen de la pista
    };

    return (
        <div>
            <input type="range" min="0" max="100" value={volume} onChange={handleVolumeChange} />
            <span>{volume}%</span>
        </div>
    );
};

export default VolumeControl;
