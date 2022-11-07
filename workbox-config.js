module.exports = {
	globDirectory: 'dist/',
	globPatterns: [
		'**/*.{jpg,png,js,css,ico,html,json,txt}'
	],
	swDest: 'dist/sw.js',
	swSrc:"src/sw.js",
	ignoreURLParametersMatching: [
		/^utm_/,
		/^fbclid$/
	]
};