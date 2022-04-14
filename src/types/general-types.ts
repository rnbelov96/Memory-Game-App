import { IconDefinition } from '@fortawesome/free-brands-svg-icons';
import { AppInitialStateType } from './redux/app-reducer';

export type CardType = {
  icon: IconDefinition;
  open: boolean;
};

export type FullStateType = {
  app: AppInitialStateType;
};
