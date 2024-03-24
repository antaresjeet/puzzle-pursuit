import { Fragment } from "react";
import PlayButton from "../play-button";

interface props {
  isWin: boolean
  restartGame: () => void
}

export default function GameOver({ isWin, restartGame }: props): JSX.Element {
  return (
    <Fragment>
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
    </Fragment>
  );
};