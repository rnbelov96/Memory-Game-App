import shuffleCards from '@/functions/shuffle-cards';
import {
  AddSecondActionType,
  AppActionConstType,
  AppActionType,
  AppInitialStateType,
  LockCardsActionType,
  MatchCardsActionType,
  OpenCardActionType,
  StartNewGameActionType,
  UnlockCardsActionType,
} from '@/types/redux/app-reducer';

const initialState: AppInitialStateType = {
  cards: shuffleCards(),
  openCards: [],
  isCardsLocked: false,
  cardsLeft: 16,
  moves: 0,
  timer: 0,
  stars: 3,
};

const ActionTypes: AppActionConstType = {
  ADD_SECOND: 'ADD_SECOND',
  START_NEW_GAME: 'START_NEW_GAME',
  OPEN_CARD: 'OPEN_CARD',
  MATCH_CARDS: 'MATCH_CARDS',
  LOCK_CARDS: 'LOCK_CARDS',
  UNLOCK_CARDS: 'UNLOCK_CARDS',
};

const ActionCreators = {
  addSecond: (): AddSecondActionType => ({
    type: ActionTypes.ADD_SECOND,
  }),

  startNewGame: (): StartNewGameActionType => ({
    type: ActionTypes.START_NEW_GAME,
  }),

  openCard: (data: number): OpenCardActionType => ({
    type: ActionTypes.OPEN_CARD,
    payload: data,
  }),

  matchCards: (): MatchCardsActionType => ({
    type: ActionTypes.MATCH_CARDS,
  }),

  lockCards: (): LockCardsActionType => ({
    type: ActionTypes.LOCK_CARDS,
  }),

  unlockCards: (): UnlockCardsActionType => ({
    type: ActionTypes.UNLOCK_CARDS,
  }),
};

const reducer = (
  state: AppInitialStateType = initialState,
  action: AppActionType,
) => {
  const newCardsStatus = [...state.cards];
  const newOpenCards = [...state.openCards];
  switch (action.type) {
    case ActionTypes.OPEN_CARD:
      newCardsStatus[action.payload].open = true;
      newOpenCards.push(action.payload);
      return {
        ...state,
        cards: newCardsStatus,
        openCards: newOpenCards,
      };

    case ActionTypes.MATCH_CARDS:
      if (
        state.cards[state.openCards[0]].icon
        === state.cards[state.openCards[1]].icon
      ) {
        return state.cardsLeft === 2
          ? {
            ...state,
            openCards: [],
            cardsLeft: 0,
            stars: state.stars === 3 ? state.stars : state.stars + 1,
            moves: state.moves + 1,
          }
          : {
            ...state,
            openCards: [],
            cardsLeft: state.cardsLeft - 2,
            stars: state.stars === 3 ? state.stars : state.stars + 1,
            moves: state.moves + 1,
          };
      }
      state.openCards.forEach(el => {
        newCardsStatus[el].open = false;
      });
      return {
        ...state,
        cards: newCardsStatus,
        openCards: [],
        stars: state.stars === 0 ? state.stars : state.stars - 1,
        moves: state.moves + 1,
      };

    case ActionTypes.LOCK_CARDS:
      return {
        ...state,
        isLocked: true,
      };

    case ActionTypes.UNLOCK_CARDS:
      return {
        ...state,
        isLocked: false,
      };

    case ActionTypes.ADD_SECOND:
      return {
        ...state,
        timer: state.timer + 1,
      };

    case ActionTypes.START_NEW_GAME:
      return {
        ...initialState,
        cards: shuffleCards(),
        openCards: [],
      };

    default:
      return state;
  }
};

export {
  reducer as appReducer,
  ActionCreators as AppActionCreators,
  ActionTypes as AppActionTypes,
};
