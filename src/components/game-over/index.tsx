import { Fragment } from "react";

interface props {
  isWin: boolean
  restartGame: () => void
}

export default function GameOver({ isWin, restartGame }: props): JSX.Element {
  return (
    <Fragment>
      {isWin
        ?
        <div id="you-win">
          <div id="you-win-wrapper">
            <div id="title">Victory is yours!<br />What&apos;s your next move, champion?</div>
            <button onClick={restartGame}>Try Again</button>
          </div>
        </div>
        :
        <div id="you-loose">
          <div id="you-loose-wrapper">
            <div id="title">
              Haha, better luck next time, slowpoke! <br />
            </div>
            <button onClick={restartGame}>Try Again</button>
          </div>
        </div>
      }
    </Fragment>
  );
};