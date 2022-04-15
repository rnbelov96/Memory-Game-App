import { FullStateType } from '@/types/general-types';

export const getCards = (state: FullStateType) => state.app.cards;

export const getOpenCards = (state: FullStateType) => state.app.openCards;

export const getCardsLockStatus = (state: FullStateType) => state.app.isCardsLocked;

export const getMoves = (state: FullStateType) => state.app.moves;

export const getTimer = (state: FullStateType) => state.app.timer;

export const getStars = (state: FullStateType) => state.app.stars;

export const getCardsLeftNumber = (state: FullStateType) => state.app.cardsLeft;
