import _ from 'lodash';
import React from 'react';
import { Grid } from 'semantic-ui-react';
import { Router, Route } from 'react-router-dom';

import { routes, PrivateRoute } from '../routes';
import { history } from './utils';

export const App = () => (
  <Router history={history}>
    <Grid>
      <Grid.Row>
        <Grid.Column textAlign="center" >
          <h1>Kinaroad Hub</h1>
        </Grid.Column>
      </Grid.Row>
      {
        _.map(routes, route => (
          route.private
            ? <PrivateRoute key={route.path} {...route} />
            : <Route key={route.path} {...route} />
        ))
      }
    </Grid>
  </Router>
);

// {
//   _.map(routes, route => (
//     <Route key={route.path} {...route} />
//   ))
// }
// <Route key="/login" path="/login" component={Login} exact />
// <PrivateRoute key="/" path="/" component={Dashboard} exact />
