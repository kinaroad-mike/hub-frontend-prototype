import React from 'react';
import { Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import routes from '../routes';

export const App = () => (
  <Grid>
    <Grid.Row>
      <Grid.Column textAlign="center" >
        <h1>Kinaroad Hub</h1>
      </Grid.Column>
    </Grid.Row>
    { routes.map(route => (
      <Route key={route.path} {...route} />
    ))}
  </Grid>
);
