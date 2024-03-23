import { StaticImageData } from "next/image";

export interface Puzzle {
  name: string;
  img: StaticImageData;
}

export interface FlipedCard {
  name: string,
  index: number
}