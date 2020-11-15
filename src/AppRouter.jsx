import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import IndexPage from './pages/Index';
import Page1Page from './pages/Page1';
import Page2Page from './pages/Page2';
import ROUTES from './routes';
import MainLayout from './layouts/main/Main';

const NotFoundPage = () => <p>NotFound page</p>;

const AppRouter = () => {
  return (
    <Router>
      <MainLayout>
        <Switch>
          <Route exact path={ROUTES.index.path} component={IndexPage} />
          <Route path={ROUTES.page1.path} component={Page1Page} />
          <Route path={ROUTES.page2.path} component={Page2Page} />
          <Route path="*" component={NotFoundPage} />
        </Switch>
      </MainLayout>
    </Router>
  );
};

export default AppRouter;
