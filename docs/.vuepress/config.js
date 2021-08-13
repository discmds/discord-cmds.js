const sidebar = require('./sidebar.js');

module.exports = {
	title: 'discord-cmds.js',
	base: '/',
	head: [
		['meta', { charset: 'utf-8' }],
		[
			'meta',
			{ name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
		],
		[
			'link',
			{ rel: 'icon', type: 'image/png', href: '/logo.png' },
		],
		['meta', { name: 'theme-color', content: '#fbad61' }],
		['meta', { property: 'og:site_name', content: 'DCjs' }],
		['meta', { property: 'og:title', content: 'DCjs' }],
		[
			'meta',
			{ property: 'og:description', content: 'A package for handling slash and normal commands on discord.js v13!' },
		],
		['meta', { property: 'og:type', content: 'website' }],
		['meta', { property: 'og:url', content: 'https://discord-cmds.dbots.ml' }],
		['meta', { property: 'og:locale', content: 'en' }],
		[
			'meta',
			{ property: 'og:image', content: '/logo.png' },
		],
	],
	theme: 'succinct',
	globalUIComponents: ['ThemeManager'],
	themeConfig: {
		smoothScroll: true,
		searchPlaceholder: 'Search',
		repo: 'discord-cmds.js',
		lastUpdated: true,
		nav: [
			{
				text: 'Documentation',
				link: '/docs/starting/setup.html',
			},
		],
		sidebar,
	},

	markdown: {
		lineNumbers: true,
	},

	plugins: ['@vuepress/plugin-back-to-top', 'vuepress-plugin-element-tabs'],
};
