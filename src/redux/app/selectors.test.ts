import { cards } from '@/functions/shuffle-cards';
import { FullStateType } from '@/types/general-types';
import {
  getCards,
  getCardsLockStatus,
  getOpenCards,
  getMoves,
  getTimer,
  getStars,
  getCardsLeftNumber,
} from './selectors';

const mockFullInitialState: FullStateType = {
  app: {
    moves: 20,
    timer: 500,
    stars: 3,
    openCards: [2, 3],
    isCardsLocked: false,
    cardsLeft: 16,
    cards,
  },
};

describe('Selector', () => {
  test('getCards should return card list', () => {
    expect(getCards(mockFullInitialState)).toEqual(cards);
  });

  test('getOpenCards should return open cards indexes', () => {
    expect(getOpenCards(mockFullInitialState)).toEqual(
      mockFullInitialState.app.openCards,
    );
  });

  test('getCardsLockStatus should return cards lock status', () => {
    expect(getCardsLockStatus(mockFullInitialState)).toEqual(
      mockFullInitialState.app.isCardsLocked,
    );
  });

  test('getMoves should return moves count', () => {
    expect(getMoves(mockFullInitialState)).toEqual(
      mockFullInitialState.app.moves,
    );
  });

  test('getMoves should return timer count', () => {
    expect(getTimer(mockFullInitialState)).toEqual(
      mockFullInitialState.app.timer,
    );
  });

  test('getStars should return stars count', () => {
    expect(getStars(mockFullInitialState)).toEqual(
      mockFullInitialState.app.stars,
    );
  });

  test('getCardsLeftNumber should return left cards count', () => {
    expect(getCardsLeftNumber(mockFullInitialState)).toEqual(
      mockFullInitialState.app.cardsLeft,
    );
  });
});
