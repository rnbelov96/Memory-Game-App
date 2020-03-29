import {
  OPENCARD,
  MATCHCARDS,
  LOCKCARDS,
  UNLOCKCARDS,
  ADDSECOND,
  STARTNEWGAME,
} from './actionsTypes';

export function openCard(data) {
  return {
    type: OPENCARD,
    payload: data,
  };
}

export function matchCards() {
  return {
    type: MATCHCARDS,
  };
}

export function lockCards() {
  return {
    type: LOCKCARDS,
  };
}

export function unLockCards() {
  return {
    type: UNLOCKCARDS,
  };
}

export function addSecond() {
  return {
    type: ADDSECOND,
  };
}

export function startNewGame() {
  return {
    type: STARTNEWGAME,
  };
}
