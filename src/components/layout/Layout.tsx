import React, { FC } from 'react';
import { Header } from '../header/Header';
import { PageNav } from '../page-nav/PageNav';
import styles from './styles.module.scss';

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<PageNav />
			<div className={styles.main}>{children}</div>
		</>
	);
};
