import React from 'react';
import renderer from 'react-test-renderer';
import { faReact } from '@fortawesome/free-brands-svg-icons';
import Card from './card';

describe('Card component', () => {
  test('should render opened card', () => {
    const tree = renderer
      .create(
        <Card
          cardIndex={1}
          cardStatus
          icon={faReact}
          isLocked
          onOpenCard={() => {}}
          openCards={[1]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  test('should render closed card', () => {
    const tree = renderer
      .create(
        <Card
          cardIndex={1}
          cardStatus={false}
          icon={faReact}
          isLocked
          onOpenCard={() => {}}
          openCards={[1]}
        />,
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
