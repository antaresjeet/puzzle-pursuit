import { FlipedCard, Puzzle } from '@/declarations';
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

interface props {
  cards: Puzzle[],
  gameWon: () => void
}

export default function Card({ cards, gameWon }: props): JSX.Element {
  const [flippedCards, setFlipedCards] = useState<FlipedCard[]>([]);
  const [disableFlip, setDisableFlip] = useState<boolean>(false);
  useEffect(() => {
    if (flippedCards.length && flippedCards.length % 2 === 0) {
      setDisableFlip(true)
      checkForMatch()
    }
  }, [flippedCards])

  const flipCard = (flippedCard: FlipedCard) => {
    if (disableFlip) return;
    setFlipedCards([...flippedCards, flippedCard]);
  }

  const checkForMatch = () => {
    const length = flippedCards.length;
    if (length % 2 === 0 && flippedCards[length - 1].name !== flippedCards[length - 2].name) {
      setTimeout(() => {
        setDisableFlip(false)
        setFlipedCards([...flippedCards.slice(0, -2)])
      }, 700)
    } else {
      setDisableFlip(false)
      if (flippedCards.length === cards.length) {
        setTimeout(() => {
          gameWon();
        }, 500);
      }
    }
  }

  const isCardFlipped = (flippedCard: FlipedCard) => {
    const isFlipped = flippedCards.some((card: FlipedCard) => card.name === flippedCard.name && card.index === flippedCard.index)
    return isFlipped;
  }

  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <div key={index} className={isCardFlipped({ name: card.name, index }) ? 'flip card-wrapper' : 'card-wrapper'} data-name={card.name} onClick={() => flipCard({ name: card.name, index })}>
          <div className="card-front">
            <Image src={card.img} alt={card.name} height={100} width={100}></Image>
          </div>
          <div className="card-back">{card.name}</div>
        </div>
      ))}
    </div>
  );
};
