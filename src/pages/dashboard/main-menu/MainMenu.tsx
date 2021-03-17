import React, { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import { SubMenuContent } from '../sub-menu-content/SubMenuContent';

export const MainMenu = () => {
	const { menuData } = useContext(MainContext);

	const transformMenuData = (data: any) => {
		const resultData = {
			topMenuLabels: [] as any,
			subMenu: [] as any,
		};

		data.forEach((item: any) => {
			resultData.topMenuLabels.push(item.label);
			if (item.subMenu) {
				item.subMenu.forEach((subItem: any) => {
					const obj = {
						key: subItem.id,
						label: subItem.label,
						items: subItem.subMenuItems.length ? (
							<SubMenuContent navData={subItem.subMenuItems} />
						) : (
							<SubMenuContent empty />
						),
					};

					resultData.subMenu.push(obj);
				});
			}
		});

		return resultData;
	};

	const transformedMenuData = transformMenuData(menuData);

	return (
		menuData.length && (
			<div className='mainMenu'>
				{menuData.map((item: any) => {
					<div className='menuItem'>
						<span className='dropdownLink'>{item.link}</span>
					</div>;
				})}
			</div>
		)
	);
};
