import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import GameStatusBar from './game-status-bar';

configure({
  adapter: new Adapter(),
});

test('onStart should start new game', () => {
  const onStartMock = jest.fn();

  const gameStatusBarComponent = mount(
    <GameStatusBar onStart={onStartMock} moves={3} stars={3} timer={20} />,
  );

  const newGameIconEl = gameStatusBarComponent.find('.fa-redo');

  newGameIconEl.simulate('click');

  expect(onStartMock).toHaveBeenCalledTimes(1);
});
