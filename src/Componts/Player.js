import React, { useState } from 'react';
import { Howl } from 'howler';

const Player = ({ tracks }) => {
    const [isPlaying, setIsPlaying] = useState(false);
    const [player, setPlayer] = useState(null);

    const togglePlay = () => {
        if (!player) {
            const sound = new Howl({
                src: tracks,
                volume: 0.5,
                onplay: () => setIsPlaying(true),
                onpause: () => setIsPlaying(false),
                onend: () => setIsPlaying(false)
            });
            setPlayer(sound);
        }

        if (isPlaying) {
            player.pause();
        } else {
            player.play();
        }
    };

    return (
        <div>
            <button onClick={togglePlay}>{isPlaying ? 'Pause' : 'Play'}</button>
        </div>
    );
};

export default Player;

