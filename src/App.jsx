import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import THEME from './theme';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <Button variant="contained" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
    </ThemeProvider>
  );
};

export default withStyles(GlobalStyles)(App);
