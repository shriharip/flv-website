import {
	twitterIcon,
	youtubeIcon,
	githubIcon,
	instagramIcon,
} from '../icons/icons';

export const footerSocials = [
	{
		url: 'https://instagram.com/',
		icon: instagramIcon,
	},
	{
		url: 'https://youtube.com/',
		icon: youtubeIcon,
	},
	{
		url: 'https://twitter.com/littlesticksdev',
		icon: twitterIcon,
	},
	{
		url: 'https://github.com/littlesticksdev/odyssey-theme',
		icon: githubIcon,
	},
];

export const footerLists = [
	{
		title: 'Menu',
		items: [
			{
				title: 'Home',
				slug: '/',
			},
			// {
			// 	title: '',
			// 	slug: '/landing-pages/landing-2',
			// },
		],
	},
	{
		title: 'Company',
		items: [
			{
				title: 'About',
				slug: '/company/about',
			},
			// {
			// 	title: 'Blog',
			// 	slug: '/blog',
			// },
			{
				title: 'Contact',
				slug: '/company/contact',
			},
		],
	},
	// {
	// 	title: 'Theme',
	// 	items: [
	// 		{
	// 			title: 'Get Started',
	// 			slug: '/theme/get-started',
	// 		},
	// 		{
	// 			title: 'Style Guide',
	// 			slug: '/theme/style-guide',
	// 		},
	// 	],
	// },
];
