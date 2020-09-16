/**
 * Global site data module
 * @module _data/site
 * @see {@link https://www.11ty.dev/docs/data-global/ Global data files in 11ty}
 */
module.exports = {
	baseUrl: "https://www.budparr.com",
	defaultLocale: "en-US",
	en: {
		locale: "en-US",
		title: "Bud Parr",
		tagline: 'building the site from scratch',

		pagination: {
			navLabel: "Pagination",
			pageLabel: "Page",
			first: "1",
			firstLabel: "1",
			previous: "Previous",
			next: "Next",
			last: "End",
			lastLabel: "Last page",
		},
		postsArchive: {
			headline: "Latest posts",
			prompt: "… peruse your blog archives",
			url: "/blog/",
		},
		/*
		 * Options for displaying dates in this locale
		 * @see {@link https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toLocaleDateString `toLocaleDateString()` on MDN}
		 */
		dateOptions: {
			year: "numeric",
			month: "long",
			day: "numeric",
			timeZone: "UTC",
		},
		nav: {
			primary: "primary navigation",
		},
	},
};
