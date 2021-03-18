import React, { useContext } from 'react';
import { MainContext } from '../../../context/MainContext';
import { ReactMegaMenu } from '../../../libs/mega-menu/mega-menu';
import { styleConfig } from '../style-config';
import { SubMenuContent } from '../sub-menu-content/SubMenuContent';
import styles from './mainMenu.module.scss';

export const MainMenu = () => {
	const { menuData } = useContext(MainContext);

	const transformMenuData = (subMenuData: any) => {
		const resultData = [] as any;

		subMenuData.forEach((subItem: any) => {
			const obj = {
				key: subItem.id,
				label: subItem.label,
				items: subItem.subMenuItems.length ? (
					<SubMenuContent navData={subItem.subMenuItems} />
				) : (
					<SubMenuContent empty />
				),
			};

			resultData.push(obj);
		});

		return resultData;
	};

	return (
		menuData.length && (
			<div className={styles.mainMenu}>
				{menuData.map((item: any) => (
					<div className={styles.menuItem} key={item.id}>
						<span className={styles.dropdownLink}>{item.label}</span>
						{item.subMenu.length && (
							<div className={styles.dropdownContent}>
								<ReactMegaMenu data={transformMenuData(item.subMenu)} styleConfig={styleConfig} />
							</div>
						)}
					</div>
				))}
			</div>
		)
	);
};
