var SVGSpriter = require('sketch-svg-spriter');

var Spriter = new SVGSpriter({
	files: {
		sketch: '*.sketch',
		dist: 'icons/'
	},
	svg: {
		padding: 20
	},
	css: {
		template: 'src/scss/icons/template.css',
		dist: 'dist/css/icons.css'
	},
	png: true
})
.generate();