module.exports = {
	title: '鲁哲豪 个人网站',
	description: 'Just playing around',
	// publicPath:"",
	themeConfig: {
		logo: '/assets/img/Skyrim.png',
		nav: [
			{ text: "首页", link: "/" },
			{ text: "简历", link: "/LZH" },
			{ text: "c++备忘录", link: "/LanguageGuide/C-Cpp" },
			{ text: "Bing", link: "https://bing.com/" },
			{
				text: 'VuePress文档',
				items: [
					{ text: "VuePress", link: "https://vuepress.vuejs.org/zh/guide/" },
					{ text: "默认主题配置", link: "https://vuepress.vuejs.org/zh/theme/default-theme-config.html" },
				]
			}
		],
		sidebar: [
			{
				title:"简历",
				path:"/LZH"
			},
			{
				title: '编程语言笔记',
				collapsable: true,
				sidebarDepth: 2,
				children: [
					'/LanguageGuide/快捷键',
					'/LanguageGuide/C-Cpp',
					'/LanguageGuide/CSharp',
					'/LanguageGuide/Fortran',
					'/LanguageGuide/Java',
					'/LanguageGuide/JavaScript',
					'/LanguageGuide/LaTeX公式',
					'/LanguageGuide/MySQL',
				]
			},
		]
		// sidebar: 'auto'
		// displayAllHeaders: true 
	}
}