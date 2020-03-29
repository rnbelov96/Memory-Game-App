import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

export default function(num) {
  switch (num) {
    case 0:
      return [faStar, faStar, faStar];

    case 1:
      return [faStarSolid, faStar, faStar];

    case 2:
      return [faStarSolid, faStarSolid, faStar];

    case 3:
      return [faStarSolid, faStarSolid, faStarSolid];

    default:
      return [faStarSolid, faStarSolid, faStarSolid];
  }
}
