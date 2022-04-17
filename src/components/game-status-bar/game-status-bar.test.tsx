import React from 'react';
import renderer from 'react-test-renderer';
import GameStatusBar from './game-status-bar';

describe('GameStatusBar component', () => {
  test('should render game status bar', () => {
    const tree = renderer
      .create(
        <GameStatusBar onStart={() => {}} moves={3} stars={3} timer={20} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
