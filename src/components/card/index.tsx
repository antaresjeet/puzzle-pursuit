import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { CardComponentProps, FlipedCard } from '@/declarations';

export default function Card({ cards, gameWon, onCardFlip }: CardComponentProps): JSX.Element {
  const [flippedCards, setFlipedCards] = useState<FlipedCard[]>([]);
  const [disableFlip, setDisableFlip] = useState<boolean>(false);
  useEffect(() => {
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

    if (flippedCards.length && flippedCards.length % 2 === 0) {
      setDisableFlip(true)
      checkForMatch()
    }
  }, [flippedCards])

  const flipCard = (flippedCard: FlipedCard) => {
    if (disableFlip) return;
    onCardFlip();
    setFlipedCards([...flippedCards, flippedCard]);
  }

  const isCardFlipped = (flippedCard: FlipedCard) => {
    const isFlipped = flippedCards.some((card: FlipedCard) => card.name === flippedCard.name && card.index === flippedCard.index)
    return isFlipped;
  }

  return (
    <div className="cards-grid">
      {cards.map((card, index) => (
        <div key={index} className={isCardFlipped({ name: card.name, index }) ? 'flip card-wrapper' : 'card-wrapper'} onClick={() => flipCard({ name: card.name, index })}>
          <div className="puzzle-show">
            <Image className='puzzle-image' src={card.img} alt={'Puzzle'}></Image>
          </div>
          <div className="puzzle-hide"></div>
        </div>
      ))}
    </div>
  );
};
