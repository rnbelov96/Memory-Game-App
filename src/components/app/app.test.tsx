import React from 'react';
import renderer from 'react-test-renderer';
import { cards } from '@/functions/shuffle-cards';
import { PureApp } from './app';

describe('App component', () => {
  test('should render game desc', () => {
    const tree = renderer
      .create(
        <PureApp
          cards={cards}
          cardsLeft={16}
          isLocked={false}
          moves={2}
          onOpenCard={() => {}}
          onStart={() => {}}
          openCards={[2]}
          stars={3}
          timer={23}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render win screen', () => {
    const tree = renderer
      .create(
        <PureApp
          cards={cards}
          cardsLeft={0}
          isLocked={false}
          moves={2}
          onOpenCard={() => {}}
          onStart={() => {}}
          openCards={[2, 1]}
          stars={3}
          timer={23}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
