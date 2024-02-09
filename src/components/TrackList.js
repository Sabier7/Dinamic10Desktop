// components/TrackList.js

import React from 'react';

const TrackList = ({ tracks, onTrackUpload }) => {
    const handleFileUpload = (e) => {
        const newTrack = e.target.files[0];
        onTrackUpload(newTrack);
    };

    return (
        <div>
            <h2>Track List</h2>
            <input type="file" accept=".mp3" onChange={handleFileUpload} />
            <ul>
                {tracks.map((track, index) => (
                    <li key={index}>{track.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default TrackList;
