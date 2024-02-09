// App.js

import React, { useState } from 'react';
import TrackList from './components/TrackList';

const App = () => {
    const [tracks, setTracks] = useState([]);

    const handleTrackUpload = (newTrack) => {
        setTracks([...tracks, newTrack]);
    };

    return (
        <div>
            <h1>Playback Multitrack</h1>
            <TrackList tracks={tracks} onTrackUpload={handleTrackUpload} />
            {/* Otros componentes y funcionalidades aquí */}
        </div>
    );
};

export default App;
