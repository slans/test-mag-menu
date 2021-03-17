import React, { FC } from 'react';
import { Header } from '../header/Header';
import { PageNav } from '../page-nav/PageNav';

export const Layout: FC = ({ children }) => {
	return (
		<>
			<Header />
			<PageNav />
			{children}
		</>
	);
};
