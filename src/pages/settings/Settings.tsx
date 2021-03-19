import React, { FC } from 'react';
import { Main } from './main/Main';
import { Sidebar } from './sidebar/Sidebar';
import styles from './styles.module.scss';

export const Settings: FC = () => {
	return (
		<div className={styles.settingsPage}>
			<Sidebar />
			<Main />
		</div>
	);
};
