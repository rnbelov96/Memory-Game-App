import { CardType } from '../general-types';

export type AppPropsType = {
  cards: CardType[];
  openCards: number[];
  isLocked: boolean;
  cardsLeft: number;
  moves: number;
  onStart: () => void;
  timer: number;
  stars: number;
  onOpenCard: (cardIndex: number, openCards: number[]) => void;
};
