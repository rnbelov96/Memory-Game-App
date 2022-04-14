import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRedo } from '@fortawesome/free-solid-svg-icons';
import convertNumToStars from '@/functions/convert-num-to-stars';
import findMinutes from '@/functions/find-minutes';
import findSeconds from '@/functions/find-seconds';

const GameStatusComponent = styled.section`
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

const GameStatusBar = ({
  stars, timer, moves, onStart,
}) => (
  <GameStatusComponent>
    <div>
      {convertNumToStars(stars).map((el, i) => (
        <FontAwesomeIcon key={`star-${i + 1}`} icon={el} />
      ))}
    </div>
    <p>{`${findMinutes(timer).edited} : ${findSeconds(timer).edited}`}</p>
    <p>{`${moves} Moves`}</p>
    <FontAwesomeIcon onClick={onStart} icon={faRedo} />
  </GameStatusComponent>
);

GameStatusBar.propTypes = {
  moves: PropTypes.number.isRequired,
  onStart: PropTypes.func.isRequired,
  timer: PropTypes.number.isRequired,
  stars: PropTypes.number.isRequired,
};

export default GameStatusBar;
