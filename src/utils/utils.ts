import { nanoid } from 'nanoid';
import { NewMenuData } from '../pages/settings/main/Main';
import { storageIterator } from './local-storage/local-storage';

export const createNewMenuData = (data: NewMenuData) => {
	const { lableLvl1, lableLvl2, titleNavBlock, linkLable } = data;

	return {
		id: nanoid(),
		label: lableLvl1,
		subMenu: [
			{
				id: nanoid(),
				label: lableLvl2,
				subMenuItems: [
					{
						id: nanoid(),
						label: titleNavBlock,
						navLinks: [
							{
								id: nanoid(),
								label: linkLable,
							},
						],
					},
				],
			},
		],
	};
};

export const updateMenuData = (setMenuData: any, newData: any) => {
	setMenuData(newData);
	storageIterator.setMenuData(newData);
};
