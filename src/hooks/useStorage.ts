import { useEffect, useState } from 'react';
import { defaultMenuData } from '../utils/local-storage/default-menu-data';
import { storageIterator } from '../utils/local-storage/local-storage';

export const useStorage = () => {
	const [menuData, setMenuData] = useState<any>(null);

	useEffect(() => {
		storageIterator.setMenuData(defaultMenuData);
		setMenuData(storageIterator.getMenuData());
	}, []);

	return [menuData, setMenuData];
};
