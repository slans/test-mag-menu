const defaultMenuData = [
	{
		id: '1',
		label: 'Menu Item 1',
		subMenu: [
			{
				id: '1.1',
				label: 'Sub Menu Item  1.1',
				subMenuItems: [
					{
						id: '1.1.1',
						label: 'My Career and Benefits',
						navLinks: [
							{
								id: '1.1.1.1',
								label: 'Learning',
								href: '#link1',
							},
							{
								id: '1.1.1.2',
								label: 'Practice',
								href: '#link2',
							},
						],
					},
					{
						id: '1.1.2',
						label: 'Travel and Expense',
						navLinks: [
							{
								id: '1.1.2.1',
								label: 'Listening',
								href: '#link3',
							},
							{
								id: '1.1.2.2',
								label: 'Watching',
								href: '#link4',
							},
						],
					},
				],
			},
		],
	},
	{
		label: 'Menu Item 2',
		id: 2,
		subMenu: [
			{
				id: '2.1',
				label: 'Sub Menu Item  2.1',
				subMenuItems: [
					{
						id: '2.1.1',
						label: 'My Career and Benefits',
						navLinks: [
							{
								id: '2.1.1.1',
								label: 'Learning',
								href: '#link1',
							},
							{
								id: '2.1.1.2',
								label: 'Practice',
								href: '#link2',
							},
						],
					},
					{
						id: '2.1.2',
						label: 'Travel and Expense',
						navLinks: [
							{
								id: '2.1.2.1',
								label: 'Listening',
								href: '#link3',
							},
							{
								id: '2.1.2.2',
								label: 'Watching',
								href: '#link4',
							},
						],
					},
				],
			},
		],
	},
];

export { defaultMenuData };
