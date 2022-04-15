import { faTrophy } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import styled from 'styled-components';
import findMinutes from '@/functions/find-minutes';
import findSeconds from '@/functions/find-seconds';
import { WinScreenPropsType } from '@/types/components/win-screen';

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

export const WinScreen: React.FunctionComponent<WinScreenPropsType> = ({
  timer,
  moves,
  stars,
  onStart,
}) => (
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

export default WinScreen;
