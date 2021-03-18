import { nanoid } from 'nanoid';
import React from 'react';
import styles from './styles.module.scss';

export const Sidebar = () => {
	const stepsLabels = ['Step 1', 'Step 2', 'Step 3'];

	function renderStepsList() {
		return stepsLabels.map((item: string) => (
			<li className='stepsListItem' key={nanoid()}>
				{item}
			</li>
		));
	}

	return (
		<div className={styles.sidebar}>
			<h2 className={styles.title}>Settings</h2>
			<ul className={styles.stepsList}>{renderStepsList()}</ul>
		</div>
	);
};
