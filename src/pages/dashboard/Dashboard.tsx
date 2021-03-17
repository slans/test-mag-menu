import React, { useContext } from 'react';
import { MainContext } from '../../context/MainContext';
import { ReactMegaMenu } from '../../libs/mega-menu/mega-menu';
import { styleConfig } from './style-config';
import { SubMenuContent } from './sub-menu-content/SubMenuContent';

export const Dashboard = () => {
	return (
		<>
			<MainMenu />
			<h1 className='pageTitle'>Dashboard page</h1>
		</>
	);

	return <ReactMegaMenu data={[{ label: 'test 1', key: 1, items: <p>Hello</p> }]} styleConfig={styleConfig} />;
};
