import React, { FC } from 'react';
import styles from './styles.module.scss';

interface SubMenuContentProps {
	navData?: any;
	empty?: boolean;
}

export const SubMenuContent: FC<SubMenuContentProps> = ({ navData, empty }) => {
	if (navData && navData.length) {
		return (
			<div className={styles.subMenuContent}>
				{navData.map((item: any) => {
					return (
						<div className={styles.navBox} key={item.id}>
							<div className={styles.navBoxTitle}>{item.label}</div>
							{item.navLinks.map((linkItem: any) => {
								return (
									<div key={linkItem.id} className={styles.linkHolder}>
										<span>{linkItem.label}</span>
									</div>
								);
							})}
						</div>
					);
				})}
			</div>
		);
	}

	return null;
};
