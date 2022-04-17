import React from 'react';
import renderer from 'react-test-renderer';
import WinScreen from './win-screen';

describe('WinScreen component', () => {
  test('should render win screen', () => {
    const tree = renderer
      .create(
        <WinScreen onStart={() => {}} moves={3} stars={3} timer={20} />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
