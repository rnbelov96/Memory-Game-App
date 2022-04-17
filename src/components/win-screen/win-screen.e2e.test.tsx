import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import WinScreen from './win-screen';

configure({
  adapter: new Adapter(),
});

test('onStart should start new game', () => {
  const onStartMock = jest.fn();

  const winScreenComponent = mount(
    <WinScreen onStart={onStartMock} moves={3} stars={3} timer={20} />,
  );

  const newGameIconEl = winScreenComponent.find('button');

  newGameIconEl.simulate('click');

  expect(onStartMock).toHaveBeenCalledTimes(1);
});
