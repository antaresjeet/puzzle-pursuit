import { StaticImageData } from "next/image";
import { MouseEventHandler } from "react";

export interface Puzzle {
  name: string;
  img: StaticImageData;
}

export interface FlipedCard {
  name: string,
  index: number
}

export enum SoundAction {
  buttonClick = 'button-click',
  cardFlip = 'card-flip',
  gameLost = 'game-lost',
  gameWon = 'game-won',
}

export interface CardComponentProps {
  cards: Puzzle[];
  gameWon: () => void;
  onCardFlip: () => void;
}

export interface GameOverComponentProps {
  isWin: boolean;
  restartGame: () => void;
}

export interface PlayButtonComponentProps {
  clickHandler: MouseEventHandler<HTMLButtonElement>;
  beforeHoverText: string;
  afterHoverText: string;
}

export interface SoundPlayerComponentProps {
  soundAction: SoundAction | undefined;
  soundTrigger: number;
};

export interface TimerComponentProps {
  timeLimit: number;
  gameLost: () => void;
}

export interface WelcomeScreenProps {
  onGameStart: MouseEventHandler<HTMLButtonElement>;
}

export interface WindowSize {
  width: number;
  height: number;
}