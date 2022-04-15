import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { CardComponentProps, CardPropsType } from '@/types/components/card';

const CardComponent = styled.div<CardComponentProps>`
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

export const Card: React.FunctionComponent<CardPropsType> = ({
  cardStatus,
  cardIndex,
  icon,
  isLocked,
  onOpenCard,
  openCards,
}) => (
  <CardComponent
    onClick={
      cardStatus || isLocked ? () => {} : () => onOpenCard(cardIndex, openCards)
    }
    open={cardStatus}
  >
    <FontAwesomeIcon icon={icon} />
  </CardComponent>
);

export default Card;
