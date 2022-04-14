import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo, faTrophy } from '@fortawesome/free-solid-svg-icons';
import findMinutes from '../functions/find-minutes';
import findSeconds from '../functions/find-seconds';
import convertNumToStars from '../functions/convert-num-to-stars';
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

let timerId;

const Title = styled.h1`
  margin-bottom: 7px;
`;

const GameStatus = styled.section`
  display: flex;
  align-items: center;
  p {
    margin-bottom: 0;
    font-size: 21px;
  }
  & > * {
    margin-right: 50px;
  }
  @media (max-width: 576px) {
    & > * {
      margin-right: 20px;
    }
  }
  & > *:last-child {
    margin-right: 0px;
  }
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
  background: #283c86; /* fallback for old browsers */
  background: -webkit-linear-gradient(
    to top,
    #283c86,
    #45a247
  ); /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to top, #283c86, #45a247);
  padding: 3%;
  border-radius: 10px;
  box-shadow: 12px 15px 20px 0 rgba(46, 61, 73, 0.5);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
`;

const Card = styled.div`
  height: 21%;
  width: 21%;
  overflow: hidden;
  background: ${props => (props.open ? '#02b3e4' : '#2e3d49')};
  font-size: ${props => (props.open ? '43px' : '0px')};
  color: #ffffff;
  border-radius: 8px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 5px 2px 20px 0 rgba(46, 61, 73, 0.5);
`;

const WinnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  & > div {
    font-size: 150px;
    color: #02ccba;
  }
  & > h1 {
    font-weight: normal;
  }
  & > button {
    background-color: #02ccba;
    border: 1px solid #02b3e4;
    border-radius: 10px;
    font-size: 32px;
    padding: 10px;
  }
  & > p {
    text-align: center;
  }
`;

function MemoryGame({
  cards,
  onOpenCard,
  openCards,
  isLocked,
  cardsLeft,
  moves,
  onStart,
  timer,
  stars,
}) {
  useEffect(() => onStart(), []);
  useEffect(() => {
    if (!cardsLeft) {
      clearInterval(timerId);
    }
  }, [cardsLeft]);
  const field = (
    <>
      <Title>Memory Game</Title>
      <GameStatus>
        <div>
          {convertNumToStars(stars).map((el, i) => (
            <FontAwesomeIcon key={`star-${i + 1}`} icon={el} />
          ))}
        </div>
        <p>{`${findMinutes(timer).edited} : ${findSeconds(timer).edited}`}</p>
        <p>{`${moves} Moves`}</p>
        <FontAwesomeIcon onClick={onStart} icon={faRedo} />
      </GameStatus>
      <Desk>
        {cards.map((el, index) => (
          <Card
            onClick={
              el.open || isLocked ? null : () => onOpenCard(index, openCards)
            }
            key={`${index + 1}-card`}
            open={el.open}
          >
            <FontAwesomeIcon icon={el.icon} />
          </Card>
        ))}
      </Desk>
    </>
  );

  const gameWinStats = (
    <WinnerContainer>
      <div>
        <FontAwesomeIcon icon={faTrophy} />
      </div>
      <h1>You are a Winner!!!</h1>
      <p>
        {`You won in ${findMinutes(timer).usual} minutes, ${
          findSeconds(timer).usual
        } seconds, using ${moves} moves, for ${stars} stars`}
      </p>
      <button onClick={onStart} type="button">
        Start another game!
      </button>
    </WinnerContainer>
  );
  return <>{cardsLeft ? field : gameWinStats}</>;
}

MemoryGame.propTypes = {
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

function mapStateToProps(state) {
  return {
    cards: getCards(state),
    openCards: getOpenCards(state),
    isLocked: getCardsLockStatus(state),
    cardsLeft: getCardsLeftNumber(state),
    moves: getMoves(state),
    timer: getTimer(state),
    stars: getStars(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MemoryGame);
