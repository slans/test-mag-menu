import React, { FC } from 'react';

interface SubMenuContentProps {
	navData?: any;
	empty?: boolean;
}

export const SubMenuContent: FC<SubMenuContentProps> = ({ navData, empty }) => {
	if (navData && navData.length) {
		return (
			<div className='subMenuContent'>
				{navData.map((item: any) => {
					return (
						<div className='navBox' key={item.id}>
							<div className='title'>{item.label}</div>
							{item.navLinks.map((linkItem: any) => {
								return (
									<span key={linkItem.id} className='link'>
										{linkItem.label}
									</span>
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
