import React, { Fragment } from 'react';
import Card from '../components/card';
import Timer from '../components/timer';
import WelcomeScreen from '../components/welcome-screen';
import { useEffect, useState } from 'react';
import { puzzles } from '@/data/puzzles';
import { Puzzle } from '@/declarations';
import GameOver from '@/components/game-over';
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";

export default function Home(): JSX.Element {
  const [winStatus, setWinStatus] = useState<boolean | undefined>(undefined);
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [cards, setCards] = useState<Puzzle[]>([]);
  const { width, height } = useWindowSize()
  useEffect(() => {
    const cardSpawner = () => {
      let index = 0;
      const numberOfCards = 20;
      const cardsArray = []
      for (let i = 0; i < numberOfCards; i++) {
        cardsArray.push({
          name: puzzles[index].name,
          img: puzzles[index].img
        })
        index++;
        if (index > 9) { index = 0 };
      }
      setCards(shuffle(cardsArray))
    }

    cardSpawner()
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

  return (
    <div className="game-container">
      {gameStarted &&
        <Fragment>
          {winStatus === undefined && <Timer gameLost={() => setWinStatus(false)} timeLimit={59} />}
          {winStatus === undefined && <Card cards={cards} gameWon={() => setWinStatus(true)} />}
          {winStatus !== undefined && <GameOver isWin={winStatus} restartGame={() => setWinStatus(undefined)} />}
        </Fragment>
      }
      {!gameStarted && <WelcomeScreen onGameStart={() => setGameStarted(true)} />}
      {winStatus && <Confetti width={width} height={height} recycle={false} tweenDuration={10000} numberOfPieces={300} />}
    </div>
  );
};
