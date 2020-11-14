import { createMuiTheme } from '@material-ui/core';

import palette from './palette';
import typography from './typography';
import overrides from './overrides';
import shadows from './shadows';

const theme = createMuiTheme({
  palette,
  typography,
  overrides,
  shadows,
  spacing: 4,
});

export default theme;
