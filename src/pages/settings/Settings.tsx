import React, { ChangeEvent, FC, SyntheticEvent, useContext, useState } from 'react';
import { MainContext } from '../../context/MainContext';

export const Settings: FC = () => {
	const { menuData, setMenuData } = useContext(MainContext);
	const [menuField, setMenuField] = useState('');

	const handleChangeMenuField = (e: ChangeEvent<HTMLInputElement>) => {
		setMenuField(e.target.value);
	};

	const handleSubmitForm = (e: SyntheticEvent) => {
		e.preventDefault();
	};

	return (
		<>
			<form onSubmit={handleSubmitForm}>
				<input type='text' value={menuField} onChange={handleChangeMenuField} />
				<button>Add menu name</button>
			</form>
		</>
	);
};
