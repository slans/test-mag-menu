import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Dashboard } from '../pages/dashboard/Dashboard';
import { Settings } from '../pages/settings/Settings';
import { ROUTES } from './constants';

export const Routes = () => {
	return (
		<>
			<Switch>
				<Route exact path={['/', `/${ROUTES.dashboard}`]}>
					<Dashboard />
				</Route>
				<Route path={`/${ROUTES.settings}`}>
					<Settings />
				</Route>
			</Switch>
		</>
	);
};
