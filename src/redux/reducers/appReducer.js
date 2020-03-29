import {
  OPENCARD,
  MATCHCARDS,
  LOCKCARDS,
  UNLOCKCARDS,
  ADDSECOND,
  STARTNEWGAME,
} from '../actions/actionsTypes';
import shuffleCards from '../../functions/fieldCreator';

const initialState = {
  cards: shuffleCards(),
  openCards: [],
  isLocked: false,
  cardsLeft: 16,
  moves: 0,
  timer: 0,
  stars: 3,
};

export default function(state = initialState, action) {
  const newCardsStatus = [...state.cards];
  const newOpenCards = [...state.openCards];
  switch (action.type) {
    case OPENCARD:
      newCardsStatus[action.payload].open = true;
      newOpenCards.push(action.payload);
      return {
        ...state,
        cards: newCardsStatus,
        openCards: newOpenCards,
      };

    case MATCHCARDS:
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

    case LOCKCARDS:
      return {
        ...state,
        isLocked: true,
      };

    case UNLOCKCARDS:
      return {
        ...state,
        isLocked: false,
      };

    case ADDSECOND:
      return {
        ...state,
        timer: state.timer + 1,
      };

    case STARTNEWGAME:
      return {
        ...initialState,
        cards: shuffleCards(),
        openCards: [],
      };

    default:
      return state;
  }
}
