import React from 'react';
import { configure, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Card from './card';

configure({
  adapter: new Adapter(),
});

test('onOpenCard gets correct data', () => {
  const onOpenCardMock = jest.fn();

  const cardComponent = mount(
    <Card
      cardIndex={1}
      cardStatus={false}
      icon={faReact}
      isLocked={false}
      onOpenCard={onOpenCardMock}
      openCards={[0]}
    />,
  );

  const cardEl = cardComponent.find('div');

  cardEl.simulate('click');

  expect(onOpenCardMock).toHaveBeenCalledTimes(1);
  expect(onOpenCardMock).toHaveBeenNthCalledWith(1, 1, [0]);
});

test('onOpenCard is not called when card is locked', () => {
  const onOpenCardMock = jest.fn();

  const cardComponent = mount(
    <Card
      cardIndex={1}
      cardStatus={false}
      icon={faReact}
      isLocked
      onOpenCard={onOpenCardMock}
      openCards={[0]}
    />,
  );

  const cardEl = cardComponent.find('div');

  cardEl.simulate('click');

  expect(onOpenCardMock).toHaveBeenCalledTimes(0);
});
