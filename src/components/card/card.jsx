import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CardComponent = styled.div`
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

const Card = ({
  cardStatus,
  cardIndex,
  icon,
  isLocked,
  onOpenCard,
  openCards,
}) => (
  <CardComponent
    onClick={
      cardStatus || isLocked ? null : () => onOpenCard(cardIndex, openCards)
    }
    open={cardStatus}
  >
    <FontAwesomeIcon icon={icon} />
  </CardComponent>
);

Card.propTypes = {
  cardStatus: PropTypes.bool.isRequired,
  cardIndex: PropTypes.number.isRequired,
  icon: PropTypes.object.isRequired,
  isLocked: PropTypes.bool.isRequired,
  onOpenCard: PropTypes.func.isRequired,
  openCards: PropTypes.arrayOf(PropTypes.number).isRequired,
};

export default Card;
