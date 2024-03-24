import React, { useEffect, useState } from 'react';

interface props {
  timeLimit: number
  gameLost: () => void
}

export default function Timer({ timeLimit, gameLost }: props): JSX.Element {
  const [remainingMinutes, setRemainingMinutes] = useState("0" + Math.floor(timeLimit / 60).toString());
  const [remainingSeconds, setRemainingSeconds] = useState(Math.floor(timeLimit % 60).toString());

  useEffect(() => {
    let timer = timeLimit, minutes, seconds;

    const countDown = () => {
      minutes = parseInt((timer / 60).toString(), 10);
      seconds = parseInt((timer % 60).toString(), 10);

      setRemainingMinutes(minutes < 10 ? "0" + minutes : minutes.toString());
      setRemainingSeconds(seconds < 10 ? "0" + seconds : seconds.toString())

      if (--timer < 0) {
        clearInterval(interval);
        gameLost();
      }
    }

    countDown();
    const interval = setInterval(countDown, 1000);

    return () => clearInterval(interval);
  }, [timeLimit])

  return (
    <div className="timer-container">
      <div className="time">Timer <br />{remainingMinutes}:{remainingSeconds}</div>
    </div>
  );
};
