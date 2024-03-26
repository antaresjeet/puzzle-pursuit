import React, { useState, useEffect, useMemo } from 'react';
import { SoundPlayerComponentProps } from '@/declarations';
import Image from 'next/image';
import speakerIcon from '../../../public/images/speaker-icon.png'
import muteIcon from '../../../public/images/mute-icon.png'
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

  return (
    <div className="sound-container">
      <input type="checkbox" id="audioButtonToggle" onChange={() => setMuted(!muted)} hidden />
      <label htmlFor="audioButtonToggle" className="toggle-switch">
        {!muted ?
          <div className="speaker">
            <Image src={speakerIcon} alt={'On'}></Image>
          </div> :
          <div className="mute-speaker">
            <Image src={muteIcon} alt={'Off'}></Image>
          </div>
        }
      </label>
    </div>
  );
};
