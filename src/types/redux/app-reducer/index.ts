import { CardType } from '@/types/general-types';

export type AppInitialStateType = {
  moves: number;
  timer: number;
  stars: number;
  isCardsLocked: boolean;
  cards: CardType[];
  openCards: number[];
  cardsLeft: number;
};

export type AppActionConstType = {
  ADD_SECOND: 'ADD_SECOND';
  START_NEW_GAME: 'START_NEW_GAME';
  OPEN_CARD: 'OPEN_CARD';
  MATCH_CARDS: 'MATCH_CARDS';
  LOCK_CARDS: 'LOCK_CARDS';
  UNLOCK_CARDS: 'UNLOCK_CARDS';
};

export type AddSecondActionType = {
  type: AppActionConstType['ADD_SECOND'];
};

export type StartNewGameActionType = {
  type: AppActionConstType['START_NEW_GAME'];
};

export type OpenCardActionType = {
  type: AppActionConstType['OPEN_CARD'];
  payload: number;
};

export type MatchCardsActionType = {
  type: AppActionConstType['MATCH_CARDS'];
};

export type LockCardsActionType = {
  type: AppActionConstType['LOCK_CARDS'];
};

export type UnlockCardsActionType = {
  type: AppActionConstType['UNLOCK_CARDS'];
};

export type AppActionType =
  | AddSecondActionType
  | StartNewGameActionType
  | OpenCardActionType
  | MatchCardsActionType
  | LockCardsActionType
  | UnlockCardsActionType;
