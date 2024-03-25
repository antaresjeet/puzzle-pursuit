import React, { Fragment } from 'react';
import Card from '../components/card';
import Timer from '../components/timer';
import WelcomeScreen from '../components/welcome-screen';
import { useEffect, useState } from 'react';
import { puzzles } from '@/data/puzzles';
import { Puzzle, SoundAction } from '@/declarations';
import GameOver from '@/components/game-over';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import SoundPlayer from '@/components/sound-player';

export default function Home(): JSX.Element {
  const [winStatus, setWinStatus] = useState<boolean | undefined>(undefined);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [soundAction, setSoundAction] = useState<SoundAction | undefined>();
  const [soundTrigger, setSoundTrigger] = useState<number>(0);
  const [cards, setCards] = useState<Puzzle[]>([]);
  const { width, height } = useWindowSize()

  useEffect(() => {
    setCards(shuffle([...puzzles, ...puzzles]))
  }, [])

  const shuffle = (array: Puzzle[]) => {
    let currentIndex = array.length, randomIndex;

    while (currentIndex > 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }

    return array;
  }

  const onGameStart = () => {
    setSoundAction(SoundAction.buttonClick)
    setSoundTrigger((prevState) => prevState + 1);
    setGameStarted(true)
  }

  const onGameOver = (status: boolean) => {
    setSoundAction(status ? SoundAction.gameWon : SoundAction.gameLost)
    setSoundTrigger((prevState) => prevState + 1);
    setWinStatus(status)
  }

  const restartGame = () => {
    setSoundAction(SoundAction.buttonClick)
    setSoundTrigger((prevState) => prevState + 1);
    setCards(shuffle(cards))
    setWinStatus(undefined)
  }

  const onCardFlip = () => {
    setSoundAction(SoundAction.cardFlip)
    setSoundTrigger((prevState) => prevState + 1);
  }

  return (
    <div className="game-container">
      <SoundPlayer soundAction={soundAction} soundTrigger={soundTrigger} />
      {gameStarted &&
        <Fragment>
          {winStatus === undefined && <Timer gameLost={() => onGameOver(false)} timeLimit={59} />}
          {winStatus === undefined && <Card cards={cards} gameWon={() => onGameOver(true)} onCardFlip={onCardFlip} />}
          {winStatus !== undefined && <GameOver isWin={winStatus} restartGame={restartGame} />}
        </Fragment>
      }
      {!gameStarted && <WelcomeScreen onGameStart={onGameStart} />}
      {winStatus && <Confetti width={width} height={height} recycle={false} tweenDuration={20000} numberOfPieces={400} />}
    </div>
  );
};
