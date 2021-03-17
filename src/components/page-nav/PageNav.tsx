import React from 'react';
import { NavLink } from 'react-router-dom';
import { ROUTES } from '../../routes/constants';
import styles from './styles.module.css';

export const PageNav = () => {
	return (
		<div className={styles.pageNav}>
			<NavLink
				to={`/${ROUTES.dashboard}`}
				className={styles.pageNavLink}
				activeClassName={styles.pageNavLinkActive}
			>
				Dashboard
			</NavLink>
			<NavLink
				to={`/${ROUTES.settings}`}
				className={styles.pageNavLink}
				activeClassName={styles.pageNavLinkActive}
			>
				Settings
			</NavLink>
		</div>
	);
};
