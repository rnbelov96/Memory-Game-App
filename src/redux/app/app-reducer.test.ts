import { cards } from '@/functions/shuffle-cards';
import { AppInitialStateType } from '@/types/redux/app-reducer';
import { AppActionCreators, appReducer } from './app-reducer';

const mockAppInitialState: AppInitialStateType = {
  moves: 20,
  timer: 500,
  stars: 2,
  openCards: [2, 3],
  isCardsLocked: false,
  cardsLeft: 10,
  cards,
};

describe('Reducer', () => {
  test('should add second', () => {
    expect(
      appReducer(mockAppInitialState, AppActionCreators.addSecond()),
    ).toEqual({ ...mockAppInitialState, timer: mockAppInitialState.timer + 1 });
  });

  test('should start new game', () => {
    expect({
      ...appReducer(mockAppInitialState, AppActionCreators.startNewGame()),
      cards,
    }).toEqual({
      moves: 0,
      timer: 0,
      stars: 3,
      openCards: [],
      isCardsLocked: false,
      cardsLeft: 16,
      cards,
    });
  });

  test('should open card', () => {
    const cardIndex = 0;
    const newState = appReducer(
      mockAppInitialState,
      AppActionCreators.openCard(cardIndex),
    );

    expect(newState.cards[cardIndex].open).toBeTruthy();
  });

  test('should match same cards', () => {
    const firstOpenCardIndex = 0;
    const secondOpenCardIndex = 1;
    const modifiedCardsStatus = [...cards];
    modifiedCardsStatus[firstOpenCardIndex].open = true;
    modifiedCardsStatus[secondOpenCardIndex].open = true;
    const newState = appReducer(
      {
        ...mockAppInitialState,
        cards: modifiedCardsStatus,
        openCards: [firstOpenCardIndex, secondOpenCardIndex],
      },
      AppActionCreators.matchCards(),
    );

    expect(newState.cards[firstOpenCardIndex].open).toBeTruthy();
    expect(newState.cards[secondOpenCardIndex].open).toBeTruthy();
    expect(newState.cardsLeft).toBe(mockAppInitialState.cardsLeft - 2);
    expect(newState.moves).toBe(mockAppInitialState.moves + 1);
    expect(newState.stars).toBe(mockAppInitialState.stars + 1);
  });

  test('should match different cards', () => {
    const firstOpenCardIndex = 0;
    const secondOpenCardIndex = 2;
    const modifiedCardsStatus = [...cards];
    modifiedCardsStatus[firstOpenCardIndex].open = true;
    modifiedCardsStatus[secondOpenCardIndex].open = true;
    const newState = appReducer(
      {
        ...mockAppInitialState,
        cards: modifiedCardsStatus,
        openCards: [firstOpenCardIndex, secondOpenCardIndex],
      },
      AppActionCreators.matchCards(),
    );

    expect(newState.cards[firstOpenCardIndex].open).toBeFalsy();
    expect(newState.cards[secondOpenCardIndex].open).toBeFalsy();
    expect(newState.cardsLeft).toBe(mockAppInitialState.cardsLeft);
    expect(newState.moves).toBe(mockAppInitialState.moves + 1);
    expect(newState.stars).toBe(mockAppInitialState.stars - 1);
  });

  test('should lock cards', () => {
    const newState = appReducer(
      mockAppInitialState,
      AppActionCreators.lockCards(),
    );

    expect(newState.isCardsLocked).toBeTruthy();
  });

  test('should unlock cards', () => {
    const newState = appReducer(
      { ...mockAppInitialState, isCardsLocked: true },
      AppActionCreators.unlockCards(),
    );

    expect(newState.isCardsLocked).toBeFalsy();
  });
});
