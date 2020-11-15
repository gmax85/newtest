import React from 'react';
import { ThemeProvider } from '@material-ui/styles';
import { withStyles } from '@material-ui/core/styles';
import AppRouter from './AppRouter';
import THEME from './theme';
import GlobalStyles from './styles/global';

const App = () => {
  return (
    <ThemeProvider theme={THEME}>
      <AppRouter />
    </ThemeProvider>
  );
};

export default withStyles(GlobalStyles)(App);
