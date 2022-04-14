import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { AppActionCreators } from '@/redux/app/app-reducer';
import {
  getCards,
  getCardsLeftNumber,
  getCardsLockStatus,
  getMoves,
  getOpenCards,
  getStars,
  getTimer,
} from '@/redux/app/selectors';
import WinScreen from '../win-screen/win-screen';
import Card from '../card/card';
import GameStatusBar from '../game-status-bar/game-status-bar';

let timerId;

const Title = styled.h1`
  margin-bottom: 7px;
`;

const Desk = styled.section`
  margin-top: 10px;
  margin-bottom: 10px;
  width: 70vw;
  height: 70vw;
  @media (max-width: 576px) {
    width: 85vw;
    height: 85vw;
  }
  max-width: 660px;
  max-height: 660px;
  background: #283c86;
  background: -webkit-linear-gradient(to top, #283c86, #45a247);
  background: linear-gradient(to top, #283c86, #45a247);
  padding: 3%;
  border-radius: 10px;
  box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const App = ({
  cards,
  onOpenCard,
  openCards,
  isLocked,
  cardsLeft,
  moves,
  onStart,
  timer,
  stars,
}) => {
  useEffect(() => onStart(), []);
  useEffect(() => {
    if (!cardsLeft) {
      clearInterval(timerId);
    }
  }, [cardsLeft]);
  const field = (
    <>
      <Title>Memory Game</Title>
      <GameStatusBar
        moves={moves}
        onStart={onStart}
        stars={stars}
        timer={timer}
      />
      <Desk>
        {cards.map((el, index) => (
          <Card
            key={`${index + 1}-card`}
            cardIndex={index}
            cardStatus={el.open}
            icon={el.icon}
            isLocked={isLocked}
            onOpenCard={onOpenCard}
            openCards={openCards}
          />
        ))}
      </Desk>
    </>
  );

  return (
    <>
      {cardsLeft ? (
        field
      ) : (
        <WinScreen
          moves={moves}
          timer={timer}
          stars={stars}
          onStart={onStart}
        />
      )}
    </>
  );
};

App.propTypes = {
  cards: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.object,
      open: PropTypes.bool,
    }),
  ).isRequired,
  onOpenCard: PropTypes.func.isRequired,
  openCards: PropTypes.arrayOf(PropTypes.number).isRequired,
  isLocked: PropTypes.bool.isRequired,
  cardsLeft: PropTypes.number.isRequired,
  moves: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
};

const mapStateToProps = state => ({
  cards: getCards(state),
  openCards: getOpenCards(state),
  isLocked: getCardsLockStatus(state),
  cardsLeft: getCardsLeftNumber(state),
  moves: getMoves(state),
  timer: getTimer(state),
  stars: getStars(state),
});

const mapDispatchToProps = dispatch => ({
  onOpenCard: (index, openCards) => {
    if (openCards.length === 1) {
      dispatch(AppActionCreators.lockCards());
      dispatch(AppActionCreators.openCard(index));
      setTimeout(() => {
        dispatch(AppActionCreators.matchCards());
        dispatch(AppActionCreators.unlockCards());
      }, 500);
      return;
    }
    dispatch(AppActionCreators.openCard(index));
  },
  onStart: () => {
    clearInterval(timerId);
    timerId = setInterval(() => {
      dispatch(AppActionCreators.addSecond());
    }, 1000);
    dispatch(AppActionCreators.startNewGame());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
