import {
  faReact,
  faCss3,
  faHtml5,
  faSass,
  faChrome,
  faJs,
  faNodeJs,
  faFirefoxBrowser,
} from '@fortawesome/free-brands-svg-icons';

const cards = [
  {
    icon: faReact,
    open: false,
  },
  {
    icon: faReact,
    open: false,
  },
  {
    icon: faCss3,
    open: false,
  },
  {
    icon: faCss3,
    open: false,
  },
  {
    icon: faHtml5,
    open: false,
  },
  {
    icon: faHtml5,
    open: false,
  },
  {
    icon: faSass,
    open: false,
  },
  {
    icon: faSass,
    open: false,
  },
  {
    icon: faChrome,
    open: false,
  },
  {
    icon: faChrome,
    open: false,
  },
  {
    icon: faJs,
    open: false,
  },
  {
    icon: faJs,
    open: false,
  },
  {
    icon: faFirefoxBrowser,
    open: false,
  },
  {
    icon: faFirefoxBrowser,
    open: false,
  },
  {
    icon: faNodeJs,
    open: false,
  },
  {
    icon: faNodeJs,
    open: false,
  },
];

export default () => cards
  .map(el => ({ ...el }))
  .sort(() => Math.random() - 0.5);
