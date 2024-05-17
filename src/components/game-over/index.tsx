import { Fragment } from "react";
import PlayButton from "../play-button";
import { GameOverComponentProps } from "@/declarations";

export default function GameOver({ isWin, restartGame }: GameOverComponentProps): JSX.Element {
  return (
    <Fragment>
      <div className="main-container">
        {isWin
          ?
          <div className="winner-card float-card">
            <div className="win-wrapper float-card-body">
              <div className="card-title">Victory is yours!<br />What&apos;s your next move, champion?</div>
              <PlayButton clickHandler={restartGame} beforeHoverText={"play"} afterHoverText={"again!"} />
            </div>
          </div>
          :
          <div className="looser-card float-card">
            <div className="loose-wrapper float-card-body">
              <div className="card-title">
                Haha, better luck next time, slowpoke! <br />
              </div>
              <PlayButton clickHandler={restartGame} beforeHoverText={"try"} afterHoverText={"again!"} />
            </div>
          </div>
        }
      </div>
    </Fragment>
  );
};