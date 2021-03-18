import React, { FC } from 'react';
import { Layout } from './components/layout/Layout';
import { MainContext } from './context/MainContext';
import { useStorage } from './hooks/useStorage';
import { Routes } from './routes/Routes';
import './app.css';

// import { ReactMegaMenu } from './libs/mega-menu/mega-menu';
/* <ReactMegaMenu tolerance={50} direction='LEFT' data={[{ label: 'test 1', key: 1, items: <p>Hello</p> }]} /> */

export const App: FC = () => {
	const [menuData, setMenuData] = useStorage();

	const data = {
		menuData,
		setMenuData,
	};

	return (
		menuData && (
			<MainContext.Provider value={data}>
				<Layout>
					<Routes />
				</Layout>
			</MainContext.Provider>
		)
	);
};
