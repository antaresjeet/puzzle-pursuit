import React, { useState, useEffect, useMemo } from 'react';
import { SoundPlayerComponentProps } from '@/declarations';

export default function SoundPlayer({ soundAction, soundTrigger }: SoundPlayerComponentProps): JSX.Element {
  const [muted, setMuted] = useState(false);
  const [audio, setAudio] = useState<HTMLAudioElement | undefined>(undefined);

  const sounds = useMemo(() => {
    return [
      { action: 'button-click', url: '/sounds/button-click.mp3' },
      { action: 'card-flip', url: '/sounds/card-flip.mp3' },
      { action: 'game-lost', url: '/sounds/game-lost.mp3' },
      { action: 'game-won', url: '/sounds/game-won.mp3' },
    ]
  }, [])

  useEffect(() => {
    if (audio && !muted) {
      audio.play();
    }
  }, [audio])

  useEffect(() => {
    if (audio) {
      audio.volume = muted ? 0 : 1;
    }
  }, [audio, muted])

  useEffect(() => {
    const sound = sounds.find((s) => s.action === soundAction);
    sound && setAudio(new Audio(sound.url));
  }, [soundAction, soundTrigger, sounds]);

  const path1Style = {
    stroke: "#fff",
    strokeWidth: 5,
    strokeLineJoin: "round",
    fill: "#fff"
  }

  const path2Style = {
    fill: "none",
    stroke: "#fff",
    strokeWidth: 5,
    strokeLineCap: "round"
  }

  return (
    <div className="sound-container">
      <input type="checkbox" id="audioButtonToggle" onChange={() => setMuted(!muted)} hidden />
      <label htmlFor="audioButtonToggle" className="toggle-switch">
        {!muted ?
          <div className="speaker">
            <svg xmlns="http://www.w3.org/2000/svg" version="1.0" viewBox="0 0 75 75" width={`18px`}>
              <path d="M39.389,13.769 L22.235,28.606 L6,28.606 L6,47.699 L21.989,47.699 L39.389,62.75 L39.389,13.769z"
                style={path1Style}>
              </path>
              <path d="M48,27.6a19.5,19.5 0 0 1 0,21.4M55.1,20.5a30,30 0 0 1 0,35.6M61.6,14a38.8,38.8 0 0 1 0,48.6"
                style={path2Style}>
              </path>
            </svg>
          </div> :
          <div className="mute-speaker">
            <svg version="1.0" viewBox="0 0 75 75" stroke="#fff" strokeWidth="5" width={`18px`}>
              <path d="m39,14-17,15H6V48H22l17,15z" fill="#fff" strokeLinejoin="round"></path>
              <path d="m49,26 20,24m0-24-20,24" fill="#fff" strokeLinecap="round"></path>
            </svg>
          </div>
        }
      </label>
    </div>
  );
};
