import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import { Grid } from 'semantic-ui-react';

import routes from "../routes";

export class App extends Component {
	render() {
		return (
			<Grid>
				<Grid.Row>
					<Grid.Column textAlign={'center'} >
						<h1>Kinaroad Hub</h1>
					</Grid.Column>
				</Grid.Row>
				{ routes.map( route => (
					<Route key={ route.path } { ...route } />
				))}

			</Grid>
		)
	}
};

				