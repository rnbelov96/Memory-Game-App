import { IconDefinition } from '@fortawesome/free-brands-svg-icons';

export type CardPropsType = {
  cardStatus: boolean;
  cardIndex: number;
  icon: IconDefinition;
  isLocked: boolean;
  onOpenCard: (cardIndex: number, openCards: number[]) => void;
  openCards: number[];
};

export type CardComponentProps = {
  open: boolean;
};
