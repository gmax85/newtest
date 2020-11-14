const white = '#FFFFFF';
const black = '#33353D';
const primary = '#326273';
const secondary = '#9d445f';
const error = '#F44336';

export default {
  common: {
    white,
    black,
  },
  primary: {
    contrastText: white,
    main: primary,
  },
  secondary: {
    contrastText: white,
    main: secondary,
  },
  error: {
    contrastText: white,
    main: error,
  },
  text: {
    primary: black,
    secondary: white,
  },
  background: {
    default: white,
    paper: white,
  },
  divider: black,
};
