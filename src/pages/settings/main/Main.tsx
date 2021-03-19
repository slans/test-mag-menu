import React, { ChangeEvent, SyntheticEvent, useContext, useState } from 'react';
import { MainContext } from '../../../context/MainContext';
import { createNewMenuData, updateMenuData } from '../../../utils/utils';
import styles from './styles.module.scss';

const initFormValues = {
	lableLvl1: '',
	lableLvl2: '',
	titleNavBlock: '',
	linkLable: '',
};

export type NewMenuData = typeof initFormValues;

export const Main = () => {
	const { menuData, setMenuData } = useContext(MainContext);
	const [isFormVisible, setIsFormVisible] = useState(false);
	const [navEntry, setNavEntry] = useState({ ...initFormValues });

	const handleChangeFormElem = (e: ChangeEvent<HTMLInputElement>) => {
		const { value, name } = e.target;
		setNavEntry({ ...navEntry, [name]: value });
	};

	const handleToggleForm = () => {
		setIsFormVisible((prevState) => !prevState);
	};

	const submitForm = (e: SyntheticEvent) => {
		e.preventDefault();
		const newMenuObj = createNewMenuData(navEntry);
		const updatedMenuData = [...menuData, newMenuObj];

		updateMenuData(setMenuData, updatedMenuData);
		setNavEntry({ ...initFormValues });
	};

	return (
		<div className={styles.main}>
			<div className={styles.titleType1}>Configure Navigation</div>
			<p>The Mega Menu can be configured here</p>
			<div className={styles.titleType2}>Add Navigation entries</div>
			<p>Here's an example of how a section can be used to group input</p>
			{!isFormVisible && (
				<div className={styles.entryHolder}>
					<button onClick={handleToggleForm}>+ Add entry</button>
				</div>
			)}
			{isFormVisible && (
				<form onSubmit={submitForm}>
					<div className={styles.fieldBox}>
						<input
							placeholder='Add menu lable level 1'
							name='lableLvl1'
							type='text'
							onChange={handleChangeFormElem}
							value={navEntry.lableLvl1}
						/>
					</div>
					<div className={styles.fieldBox}>
						<input
							placeholder='Add menu lable level 2'
							name='lableLvl2'
							type='text'
							onChange={handleChangeFormElem}
							value={navEntry.lableLvl2}
						/>
					</div>
					<div className={styles.fieldBox}>
						<input
							placeholder='Add title for sub-sub menu'
							name='titleNavBlock'
							type='text'
							onChange={handleChangeFormElem}
							value={navEntry.titleNavBlock}
						/>
					</div>
					<div className={styles.fieldBox}>
						<input
							placeholder='Add link for sub-sub menu'
							name='linkLable'
							type='text'
							onChange={handleChangeFormElem}
							value={navEntry.linkLable}
						/>
					</div>
					<div className={styles.submitHolder}>
						<button type='submit'>Add data</button>
					</div>
				</form>
			)}
		</div>
	);
};
