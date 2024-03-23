import { MouseEventHandler } from "react";

interface WelcomeScreenProps {
  onGameStart: MouseEventHandler<HTMLButtonElement>
}

export default function WelcomeScreen({ onGameStart }: WelcomeScreenProps): JSX.Element {
  return (
    <div id="welcome-screen">
      <div id="welcome-wrapper">
        <div id="title">
          Hey there!<br />It seems like you&apos;ve been through quite a journey to find yourself here.<br />Welcome!<br />
        </div>
        <button onClick={onGameStart}>GO</button>
        <p id="timeee">(ready player one? you&apos;ve got 59 seconds to finish this quest. challenge accepted? 🎮✨)
        </p>
      </div>
    </div>
  );
};