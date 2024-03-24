import { MouseEventHandler } from "react";
import PlayButton from "../play-button";

interface props {
  onGameStart: MouseEventHandler<HTMLButtonElement>
}

export default function WelcomeScreen({ onGameStart }: props): JSX.Element {
  return (
    <div className="welcome-screen float-card">
      <div className="welcome-wrapper float-card-body">
        <div className="card-title">
          Hey there!<br />It seems like you&apos;ve been through quite a journey to find yourself here.<br />Welcome!<br />
        </div>
        <PlayButton clickHandler={onGameStart} beforeHoverText={"play"} afterHoverText={"now!"} />
        <p className="time-head">(ready player one? you&apos;ve got 59 seconds to finish this quest. challenge accepted? 🎮✨)
        </p>
      </div>
    </div>
  );
};