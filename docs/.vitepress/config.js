export default {
	title: "vitepress-starter",
	description: "How to use VitePress",
	base: '/vitepress-starter/',
	themeConfig: {
		nav: [
			{
				text: "note", link: '/guide/getting-started', activeMatch: "/guide/"
			}
		],
		sidebar: {
			'/guide/': [
				{
					text: "note",
					collapsible: false,
					items: [
						{ text: "Getting-Started", link: "/guide/getting-started" },
					]
				}
			]
		},
	}
}
