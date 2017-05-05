(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _slides = __webpack_require__(1);

	var _slides2 = _interopRequireDefault(_slides);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = function (locals, callback) {
	  callback(null, (0, _slides2.default)({ NODE_ENV: ("production") }));
	};

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

	var pug = __webpack_require__(2);

	function template(locals) {var pug_html = "", pug_mixins = {}, pug_interp;;var locals_for_with = (locals || {});(function (NODE_ENV) {pug_html = pug_html + "\u003C!DOCTYPE html\u003E\u003Chtml\u003E\u003Chead\u003E\u003Cmeta charset=\"utf-8\"\u003E\u003Cmeta name=\"viewport\" content=\"width=device-width, initial-scale=1, maximum-scale=1\"\u003E\u003Ctitle\u003EA Unified Styling Language\u003C\u002Ftitle\u003E\u003C\u002Fhead\u003E\u003Cbody\u003E\u003Carticle\u003E\u003Csection\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E1999\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EI ❤ CSS\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static react\"\u003E\u003C\u002Fsection\u003E\u003Csection class=\"css-modules-logo\"\u003E\u003Csvg id=\"svg2\" xmlns:rdf=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002F02\u002F22-rdf-syntax-ns#\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" height=\"1e3\" viewBox=\"0 0 1000 1000\" width=\"1e3\" version=\"1.1\" xmlns:cc=\"http:\u002F\u002Fcreativecommons.org\u002Fns#\" xmlns:dc=\"http:\u002F\u002Fpurl.org\u002Fdc\u002Felements\u002F1.1\u002F\"\u003E\n \u003Cg id=\"layer1\" transform=\"translate(3.7129 -62.36)\"\u003E\n  \u003Cg id=\"flowRoot3336\" transform=\"matrix(1.8595,0,0,1.8595,-30.174,333.87)\"\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4379\" d=\"m105.49 108.89q12.261 0 19.028 6.46 6.7676 6.46 7.5146 14.678h-8.5254q-1.4502-6.2402-5.8008-9.8877-4.3066-3.6475-12.129-3.6475-9.5361 0-15.425 6.7236-5.8447 6.6797-5.8447 20.522 0 11.338 5.2734 18.413 5.3174 7.0312 15.82 7.0312 9.668 0 14.722-7.4268 2.6807-3.9111 3.999-10.283h8.5254q-1.1426 10.195-7.5586 17.095-7.6904 8.3057-20.742 8.3057-11.25 0-18.896-6.8115-10.063-9.0088-10.063-27.817 0-14.282 7.5586-23.423 8.1738-9.9316 22.544-9.9316zm-1.7578 0z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4381\" d=\"m149.04 154.37q0.30761 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1524-4.043-6.1524-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1192 4.8779 7.1192 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5478 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4383\" d=\"m208.98 154.37q0.30762 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1523-4.043-6.1523-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1191 4.8779 7.1191 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5479 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4385\" d=\"m78.063 223.14h12.524l18.545 54.58 18.413-54.58h12.393v64.556h-8.3057v-38.101q0-1.9775 0.0879-6.5478t0.0879-9.7998l-18.413 54.448h-8.6572l-18.545-54.448v1.9775q0 2.373 0.08789 7.251 0.13184 4.834 0.13184 7.1191v38.101h-8.3496v-64.556z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4387\" d=\"m181.2 221.39q17.095 0 25.312 10.986 6.416 8.5693 6.416 21.929 0 14.458-7.3389 24.038-8.6133 11.25-24.565 11.25-14.897 0-23.423-9.8438-7.6025-9.4922-7.6025-23.994 0-13.096 6.5039-22.412 8.3496-11.953 24.697-11.953zm0.87891 60.381q11.558 0 16.699-8.2617 5.1856-8.3057 5.1856-19.072 0-11.382-5.9766-18.325-5.9326-6.9434-16.26-6.9434-10.02 0-16.348 6.8994-6.3281 6.8555-6.3281 20.259 0 10.723 5.4053 18.105 5.4492 7.3389 17.622 7.3389zm-0.61523-60.381z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4389\" d=\"m248.09 280.23q4.4385 0 7.2949-0.92285 5.0977-1.7139 8.3496-6.5918 2.5928-3.9111 3.7354-10.02 0.65918-3.6475 0.65918-6.7676 0-11.997-4.79-18.633-4.75-6.63-15.34-6.63h-15.513v49.57h15.601zm-24.39-57.085h26.147q13.315 0 20.654 9.4482 6.5478 8.5254 6.5478 21.841 0 10.283-3.8672 18.589-6.8115 14.678-23.423 14.678h-26.06v-64.556z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4391\" d=\"m297.83 223.14v39.902q0 7.0312 2.6367 11.689 3.9111 7.0312 13.184 7.0312 11.118 0 15.117-7.6025 2.1533-4.1309 2.1533-11.118v-39.902h8.877v36.255q0 11.909-3.208 18.325-5.8887 11.689-22.236 11.689-16.348 0-22.192-11.689-3.208-6.416-3.208-18.325v-36.255h8.877zm16.567 0z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4393\" d=\"m353.21 223.14h8.7451v56.865h32.695v7.6904h-41.44v-64.556z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4395\" d=\"m404.14 223.14h47.065v7.9102h-38.54v19.6h35.64v7.4707h-35.64v21.885h39.199v7.6904h-47.725v-64.556zm23.862 0z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4397\" d=\"m469.13 266.87q0.30762 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1523-4.043-6.1523-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1191 4.8779 7.1191 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5479 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z\"\u002F\u003E\n  \u003C\u002Fg\u003E\n  \u003Crect id=\"rect4156\" height=\"695.02\" width=\"695.02\" stroke=\"#fff\" y=\"214.85\" x=\"72.492\" stroke-width=\"5\" fill=\"none\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch1\u003ECSS-in-JS\u003C\u002Fh1\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E&ldquo;Just learn CSS&rdquo;\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EMisunderstood\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ecommunities\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EComponent systems\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; &amp; &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EProgressive enhancement\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"houston-video\"\u003E\u003Cvideo" + (pug.attr("src", __webpack_require__(4), true, true)+" width=\"100%\" height=\"100%\" autoplay loop") + "\u003E\u003C\u002Fvideo\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EI&rsquo;m very interested\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ein CSS-in-JS\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EI think you\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eshould be too\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EBut Why?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EScoped styles\u003C\u002Fli\u003E\u003Cli\u003ECritical CSS\u003C\u002Fli\u003E\u003Cli\u003ESmarter optimisations\u003C\u002Fli\u003E\u003Cli\u003EPackage management\u003C\u002Fli\u003E\u003Cli\u003ENon-browser styling\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E1.\u003C\u002Fh3\u003E\u003Ch2\u003EScoped Styles\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EManaging CSS at scale\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EThe hardest problem\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ein front-end\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"nicolesullivan\"\u003E\u003Ch2\u003EOOCSS\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Nicole Sullivan &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"jonathansnook\"\u003E\u003Ch2\u003ESMACSS\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Jonathan Snook &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"yandex\"\u003E\u003Ch2\u003EBEM\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; from Yandex &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E.Block__element--modifier\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EConvention\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E👍\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EConvention?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EBEM Blocks\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; are essentially &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EComponents\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EComponents\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; are defined in &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EJavaScript\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"sunilpai\"\u003E\u003Ch2\u003EGlamor\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Sunil Pai &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Eimport { css } from 'glamor'\n\n\u003Cem\u003Ecss({\n  fontFamily: 'Comic Sans MS',\n  color: 'blue'\n})\u003C\u002Fem\u003E\n\n\u002F\u002F → \u003Cem\u003E'css-1pyvz'\u003C\u002Fem\u003E\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EHashed classes\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; to &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003Eenforce scoping\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E\u003Cstrike\u003EInline styles\u003C\u002Fstrike\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cspan\u003EReal CSS\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"olegslobodskoi\"\u003E\u003Ch2\u003EJSS\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Oleg Slobodskoi &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Econst styles = {\n  button: {\n    padding: '10px',\n    \u003Cem\u003E'&:hover':\u003C\u002Fem\u003E {\n      background: 'blue'\n    }\n  },\n  \u003Cem\u003E'@media (min-width: 1024px)':\u003C\u002Fem\u003E {\n    button: {\n      padding: '20px'\n    }\n  }\n}\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Econst { \u003Cem\u003Eclasses\u003C\u002Fem\u003E } =\n  jss.createStyleSheet(\u003Cem\u003Estyles\u003C\u002Fem\u003E).attach()\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Edocument.body.innerHTML = `\n  &lt;h1 class=\"${\u003Cem\u003Eclasses.heading\u003C\u002Fem\u003E}\"\u003EHello CSSConf EU!&lt;\u002Fh1\u003E\n`\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EScoped CSS\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; &amp; &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EComponents\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003Ereact-jss\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Eimport injectSheet from 'react-jss'\n\nconst Button = ({ \u003Cem\u003Eclasses\u003C\u002Fem\u003E, children }) =\u003E (\n  &lt;button className={\u003Cem\u003Eclasses.button\u003C\u002Fem\u003E}\u003E\n    &lt;span className={\u003Cem\u003Eclasses.label\u003C\u002Fem\u003E}\u003E\n      {children}\n    &lt;\u002Fspan\u003E\n  &lt;\u002Fbutton\u003E\n)\n\nexport default \u003Cem\u003EinjectSheet(styles)(Button)\u003C\u002Fem\u003E\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E&ldquo;Separating concerns?&rdquo;\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E\u003Cem\u003Eexport default\u003C\u002Fem\u003E {\n  \u003Cem\u003Ebutton\u003C\u002Fem\u003E: {\n    background: props =\u003E props.color\n  },\n  \u003Cem\u003Elabel\u003C\u002Fem\u003E: {\n    fontWeight: 'bold'\n  }\n}\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E\u003Cem\u003Eimport\u003C\u002Fem\u003E styles \u003Cem\u003Efrom\u003C\u002Fem\u003E '.\u002FButton.styles.js'\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EStyles passed around\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Elike regular code\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EComponent scoping\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; is now &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003Eautomated\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EAtomic design\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EBEM is baked in,\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Enot opt-in\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection class=\"css-modules-logo\"\u003E\u003Csvg id=\"svg2\" xmlns:rdf=\"http:\u002F\u002Fwww.w3.org\u002F1999\u002F02\u002F22-rdf-syntax-ns#\" xmlns=\"http:\u002F\u002Fwww.w3.org\u002F2000\u002Fsvg\" height=\"1e3\" viewBox=\"0 0 1000 1000\" width=\"1e3\" version=\"1.1\" xmlns:cc=\"http:\u002F\u002Fcreativecommons.org\u002Fns#\" xmlns:dc=\"http:\u002F\u002Fpurl.org\u002Fdc\u002Felements\u002F1.1\u002F\"\u003E\n \u003Cg id=\"layer1\" transform=\"translate(3.7129 -62.36)\"\u003E\n  \u003Cg id=\"flowRoot3336\" transform=\"matrix(1.8595,0,0,1.8595,-30.174,333.87)\"\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4379\" d=\"m105.49 108.89q12.261 0 19.028 6.46 6.7676 6.46 7.5146 14.678h-8.5254q-1.4502-6.2402-5.8008-9.8877-4.3066-3.6475-12.129-3.6475-9.5361 0-15.425 6.7236-5.8447 6.6797-5.8447 20.522 0 11.338 5.2734 18.413 5.3174 7.0312 15.82 7.0312 9.668 0 14.722-7.4268 2.6807-3.9111 3.999-10.283h8.5254q-1.1426 10.195-7.5586 17.095-7.6904 8.3057-20.742 8.3057-11.25 0-18.896-6.8115-10.063-9.0088-10.063-27.817 0-14.282 7.5586-23.423 8.1738-9.9316 22.544-9.9316zm-1.7578 0z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4381\" d=\"m149.04 154.37q0.30761 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1524-4.043-6.1524-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1192 4.8779 7.1192 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5478 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4383\" d=\"m208.98 154.37q0.30762 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1523-4.043-6.1523-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1191 4.8779 7.1191 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5479 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4385\" d=\"m78.063 223.14h12.524l18.545 54.58 18.413-54.58h12.393v64.556h-8.3057v-38.101q0-1.9775 0.0879-6.5478t0.0879-9.7998l-18.413 54.448h-8.6572l-18.545-54.448v1.9775q0 2.373 0.08789 7.251 0.13184 4.834 0.13184 7.1191v38.101h-8.3496v-64.556z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4387\" d=\"m181.2 221.39q17.095 0 25.312 10.986 6.416 8.5693 6.416 21.929 0 14.458-7.3389 24.038-8.6133 11.25-24.565 11.25-14.897 0-23.423-9.8438-7.6025-9.4922-7.6025-23.994 0-13.096 6.5039-22.412 8.3496-11.953 24.697-11.953zm0.87891 60.381q11.558 0 16.699-8.2617 5.1856-8.3057 5.1856-19.072 0-11.382-5.9766-18.325-5.9326-6.9434-16.26-6.9434-10.02 0-16.348 6.8994-6.3281 6.8555-6.3281 20.259 0 10.723 5.4053 18.105 5.4492 7.3389 17.622 7.3389zm-0.61523-60.381z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4389\" d=\"m248.09 280.23q4.4385 0 7.2949-0.92285 5.0977-1.7139 8.3496-6.5918 2.5928-3.9111 3.7354-10.02 0.65918-3.6475 0.65918-6.7676 0-11.997-4.79-18.633-4.75-6.63-15.34-6.63h-15.513v49.57h15.601zm-24.39-57.085h26.147q13.315 0 20.654 9.4482 6.5478 8.5254 6.5478 21.841 0 10.283-3.8672 18.589-6.8115 14.678-23.423 14.678h-26.06v-64.556z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4391\" d=\"m297.83 223.14v39.902q0 7.0312 2.6367 11.689 3.9111 7.0312 13.184 7.0312 11.118 0 15.117-7.6025 2.1533-4.1309 2.1533-11.118v-39.902h8.877v36.255q0 11.909-3.208 18.325-5.8887 11.689-22.236 11.689-16.348 0-22.192-11.689-3.208-6.416-3.208-18.325v-36.255h8.877zm16.567 0z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4393\" d=\"m353.21 223.14h8.7451v56.865h32.695v7.6904h-41.44v-64.556z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4395\" d=\"m404.14 223.14h47.065v7.9102h-38.54v19.6h35.64v7.4707h-35.64v21.885h39.199v7.6904h-47.725v-64.556zm23.862 0z\"\u002F\u003E\n   \u003Cpath fill=\"#fff\" stroke=\"none\" id=\"path4397\" d=\"m469.13 266.87q0.30762 5.4932 2.5928 8.9209 4.3506 6.416 15.337 6.416 4.9219 0 8.9648-1.4062 7.8223-2.7246 7.8223-9.7559 0-5.2734-3.2959-7.5146-3.3398-2.1973-10.459-3.8232l-8.7451-1.9775q-8.5693-1.9336-12.129-4.2627-6.1523-4.043-6.1523-12.085 0-8.7012 6.0205-14.282 6.0205-5.5811 17.051-5.5811 10.151 0 17.227 4.9219 7.1191 4.8779 7.1191 15.645h-8.2178q-0.65918-5.1856-2.8125-7.9541-3.999-5.0537-13.579-5.0537-7.7344 0-11.118 3.252-3.3838 3.252-3.3838 7.5586 0 4.7461 3.9551 6.9434 2.5928 1.4062 11.733 3.5156l9.0527 2.0654q6.5479 1.4941 10.107 4.0869 6.1523 4.5264 6.1523 13.14 0 10.723-7.8223 15.337-7.7783 4.6143-18.105 4.6143-12.041 0-18.853-6.1523-6.8115-6.1084-6.6797-16.567h8.2178zm17.666-45.483z\"\u002F\u003E\n  \u003C\u002Fg\u003E\n  \u003Crect id=\"rect4156\" height=\"695.02\" width=\"695.02\" stroke=\"#fff\" y=\"214.85\" x=\"72.492\" stroke-width=\"5\" fill=\"none\"\u002F\u003E\n \u003C\u002Fg\u003E\n\u003C\u002Fsvg\u003E\n\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E2.\u003C\u002Fh3\u003E\u003Ch2\u003ECritical CSS\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E👋 Patrick Hamann\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EGoogle PageSpeed\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EInlining styles\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; for the &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003Ecurrent page\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E&lt;head\u003E\n  &lt;style\u003E\u003Cem\u003E.heading{...}\u003C\u002Fem\u003E&lt;\u002Fstyle\u003E\n&lt;\u002Fhead\u003E\n&lt;body\u003E\n  &lt;h1 class=\"\u003Cem\u003Eheading\u003C\u002Fem\u003E\"\u003E...&lt;\u002Fh1\u003E\n  &lt;link rel=\"stylesheet\" ... \u002F\u003E\n&lt;\u002Fbody\u003E\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"addyosmani\"\u003E\u003Ch2\u003ECritical\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Addy Osmani &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E👍\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EOptional\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eoptimisation\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E&ldquo;Hard to maintain\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ehard to automate&rdquo;\u003Cbr \u002F\u003E\u003Cbr \u002F\u003E&mdash; Patrick Hamann\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECSS-in-JS\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; &amp; &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EServer rendering\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECritical CSS is\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Enot just an\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eoptimisation\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EServer-side\u003Cbr \u002F\u003E\u003Cbr \u002F\u003ECSS-in-JS\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Edepends on\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ecritical CSS\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"aphrodite\"\u003E\u003Ch2\u003EAphrodite\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; from Khan Academy &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Eimport { StyleSheet, css } from 'aphrodite'\n\nconst styles = StyleSheet.create({\n  heading: { color: 'blue' }\n})\n\nconst Heading = ({ children }) =\u003E (\n  &lt;h1 className={\u003Cem\u003Ecss(styles.heading)\u003C\u002Fem\u003E}&gt;\n    { children }\n  &lt;\u002Fh1&gt;\n)\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Eimport { StyleSheetServer } from 'aphrodite'\n\nconst { html, \u003Cem\u003Ecss\u003C\u002Fem\u003E } = \u003Cem\u003EStyleSheetServer.renderStatic\u003C\u002Fem\u003E(\n  () =\u003E ReactDOMServer.renderToString(&lt;App \u002F&gt;)\n)\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Econst criticalCSS = `\n  &lt;style data-aphrodite&gt;\n    \u003Cem\u003E${css.content}\u003C\u002Fem\u003E\n  &lt;\u002Fstyle&gt;\n`\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Econst appHtml = `\n  &lt;div id=\"root\"&gt;\n    \u003Cem\u003E${html}\u003C\u002Fem\u003E\n  &lt;\u002Fdiv&gt;\n`\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EBuilt for\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eprogressive\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eenhancement\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EServer rendered\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; or &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EStatically pre-rendered\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECritical CSS is built in,\u003Cbr \u002F\u003E\u003CBr \u002F\u003Enot opt-in\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E3.\u003C\u002Fh3\u003E\u003Ch2\u003ESmarter Optimisations\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EReducing CSS bundle\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; to the &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003Eabsolute minimum\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"atomic\"\u003E\u003Ch2\u003EAtomic CSS\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; from Yahoo &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E&lt;div class=\"\u003Cem\u003EBgc(#0280ae.5) C(#fff) P(20px)\u003C\u002Fem\u003E\"&gt;\n  Atomic CSS\n&lt;\u002Fdiv&gt;\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"mrmrs\"\u003E\u003Ch2\u003ETachyons\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Adam Morse &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E&lt;div class=\"\u003Cem\u003Edib f5 f4-ns fw6 mt0 mb1 link black-70\u003C\u002Fem\u003E\"&gt;\n  Tachyons\n&lt;\u002Fa&gt;\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ETreating classes\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Elike inline styles\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E👍 \u002F 👎\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E&lt;aside className={\u003Cem\u003Estyles.sidebar\u003C\u002Fem\u003E} \u002F&gt;\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E&lt;aside className={\u003Cem\u003E'sidebar'\u003C\u002Fem\u003E} \u002F&gt;\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003E&lt;aside className={\u003Cem\u003E'class1 class2 class3 class4'\u003C\u002Fem\u003E} \u002F&gt;\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"ryantsao\"\u003E\u003Ch2\u003EStyletron\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Ryan Tsao &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EDynamic, zero config\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eatomic CSS\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static styletron-virtual-classes\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Eimport styletron from 'styletron'\n\nstyletron.injectDeclaration({\n  \u003Cem\u003Eprop:\u003C\u002Fem\u003E 'color',\n  \u003Cem\u003Eval:\u003C\u002Fem\u003E 'red',\n  \u003Cem\u003Emedia:\u003C\u002Fem\u003E '(min-width: 800px)'\n})\n\n\u002F\u002F → \u003Cem\u003E'a'\u003C\u002Fem\u003E\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003EinjectStyle(styletron, {\n  \u003Cem\u003Ecolor: 'red',\u003C\u002Fem\u003E\n  display: 'inline-block'\n});\n\u002F\u002F → '\u003Cem\u003Ea\u003C\u002Fem\u003E d'\n\ninjectStyle(styletron, {\n  \u003Cem\u003Ecolor: 'red',\u003C\u002Fem\u003E\n  fontSize: '1.6em'\n});\n\u002F\u002F → '\u003Cem\u003Ea\u003C\u002Fem\u003E e'\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static styletron-size-airbnb\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EAtomic CSS is baked in,\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Enot opt-in\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E4.\u003C\u002Fh3\u003E\u003Ch2\u003EPackage Management\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EHow do we share CSS?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"bower\"\u003E\u003Ch2\u003EBower?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EManual CSS inclusion\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ENot coupled\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; to a &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003Emodule system\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EDependencies\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; of &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EDependencies?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static npm-vs-bower\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EMonolithic dependencies\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EPackage manager\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; for &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003ECSS \u002F Sass \u002F Less?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EPackage manager\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; for &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EHTML?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EWe share HTML-in-JS\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EWhat if we shared CSS\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Evia JavaScript &amp; npm?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E\u003Cstrike\u003Emixins\u003C\u002Fstrike\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cspan\u003Efunctions\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E\u003Cstrike\u003E@extend\u003C\u002Fstrike\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cspan\u003E{ ...rules }\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECompose and share like\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eany other code\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"maxandnik\"\u003E\u003Ch2\u003E${✨}\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Epolished\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Max Stoiber &amp; Nik Graf &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EThe Lodash of CSS-in-JS\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3 style=\"font-size: 18px; width: 600px;\"\u003EclearFix, ellipsis, fontFace, hiDPI, hideText, normalize, placeholder, radialGradient, retinaImage, selection, timingFunctions, wordWrap, adjustHue, complement, darken, desaturate, grayscale, hsl, hsla, invert, lighten, mix, opacify, parseToHsl, parseToRgb, rgb, rgba, saturate, setHue, setLightness, setSaturation, shade, tint, transparentize, animation, backgroundImages, backgrounds, borderColor, borderRadius, borderStyle, borderWidth, buttons, margin, padding, position, size, textInputs, transitions, directionalProperty, em, modularScale, rem, stripUnit, Ratio, RgbColor, RgbaColor, HslColor, HslaColor, FontFaceConfiguration, RadialGradientConfiguration, TimingFunction, AnimationProperty, ButtonState, InputState, toColorString, PointingDirection\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static npm-vs-bower\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EJavaScript modules\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch3\u003E5.\u003C\u002Fh3\u003E\u003Ch2\u003ENon-browser Styling\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static react\"\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E\u003Cstrike\u003EDOM Mutation\u003C\u002Fstrike\u003E\u003Cbr \u002F\u003E\u003Cbr \u002F\u003EVirtual DOM\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Eimport { \u003Cem\u003Erender\u003C\u002Fem\u003E } from \u003Cem\u003E'react-dom'\u003C\u002Fem\u003E\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EDifferent\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Erenderers\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EVirtual \u003Cstrike\u003EDOM\u003C\u002Fstrike\u003E whatever\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"iphone\"\u003E\u003Ch2\u003Ereact-native\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Evar styles = \u003Cem\u003EStyleSheet.create\u003C\u002Fem\u003E({\n  container: {\n    borderRadius: 4,\n    borderWidth: 0.5,\n    borderColor: '#d6d7da',\n  },\n  title: {\n    fontSize: 19,\n    fontWeight: 'bold',\n  },\n  activeTitle: {\n    color: 'red',\n  }\n});\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Evar styles = StyleSheet.create({\n  container: {\n    \u003Cem\u003Edisplay: 'flex'\u003C\u002Fem\u003E\n  }\n});\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003Ecss-layout\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static yoga-site\"\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"yoga-text\"\u003E\u003Ch2 style=\"width: 800px; text-align: left; line-height: 60px; text-transform: none; letter-spacing: 0;\"\u003E&ldquo;Yoga’s focus is on creating an expressive layout library, not implementing all of CSS.&rdquo;\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECSS at scale\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; is all about picking a &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003EReasonable subset\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E\u003Cstrike\u003ETable layouts\u003C\u002Fstrike\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cstrike\u003EFloats\u003C\u002Fstrike\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cspan\u003EFlexbox\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E\u003Cstrike\u003ECascade\u003C\u002Fstrike\u003E\u003Cbr\u003E\u003Cbr\u003E\u003Cspan\u003EScoped styles\u003C\u002Fspan\u003E\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECross-platform components\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; with &mdash;\u003C\u002Fh3\u003E\u003Ch2\u003Eembedded styles\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"necolas\"\u003E\u003Ch2\u003Ereact-native-web\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Nicolas Gallagher &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Ealias: {\n  'react-native': 'react-native-web'\n}\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"lelandrichardson\"\u003E\u003Ch2\u003Ereact-primitives\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Leland Richardson &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"microsoft\"\u003E\u003Ch2\u003Ereactxp\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; from Microsoft &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ETaking our\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ecomponents\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eeven further\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"jongold\"\u003E\u003Ch2\u003Ereact-sketchapp\u003C\u002Fh2\u003E\u003Ch3\u003E&mdash; by Jon Gold &mdash;\u003C\u002Fh3\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"static contain react-sketchapp\"\u003E\u003C\u002Fsection\u003E\u003Csection data-bespoke-backdrop=\"react-sketchapp-video\"\u003E\u003Cvideo" + (pug.attr("src", __webpack_require__(5), true, true)+" width=\"100%\" height=\"100%\" autoplay loop") + "\u003E\u003C\u002Fvideo\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECross-platform,\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ecross-disciplinary\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Edesign systems\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ECross-platform code as\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Ethe source of truth\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003ETaking CSS where\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eit&rsquo;s never been before\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EWhy?\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EScoping\u003C\u002Fli\u003E\u003Cli\u003EScaling\u003C\u002Fli\u003E\u003Cli\u003EMaintaining\u003C\u002Fli\u003E\u003Cli\u003EOptimising\u003C\u002Fli\u003E\u003Cli\u003ESharing\u003C\u002Fli\u003E\u003Cli\u003EComposing\u003C\u002Fli\u003E\u003Cli\u003EUnifying\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2 class=\"single-words\"\u003EA unified styling language\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ccode\u003E\u003Cpre\u003Eimport {\n  \u003Cem\u003EPageBlock,\n  Card,\n  Text\u003C\u002Fem\u003E\n} from 'seek-style-guide\u002Freact'\n\n\u003Cem\u003E&lt;PageBlock\u003E\n  &lt;Card\u003E\n    &lt;Text heading\u003E\u003C\u002Fem\u003EHello CSSConf EU!\u003Cem\u003E&lt;\u002FText\u003E\n  &lt;\u002FCard\u003E\n&lt;\u002FPageBlock\u003E\u003C\u002Fem\u003E\n\u003C\u002Fpre\u003E\u003C\u002Fcode\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EWithout breaking\u003Cbr \u002F\u003E\u003Cbr \u002F\u003Eprogressive enhancement\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E&ldquo;Just learn CSS&rdquo;\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003EWe&rsquo;re not done yet\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cul class=\"no-bullets\"\u003E\u003Cli\u003EPerformance\u003C\u002Fli\u003E\u003Cli\u003EExtracting static CSS\u003C\u002Fli\u003E\u003Cli\u003ETargeting CSS Variables\u003C\u002Fli\u003E\u003Cli\u003EMaking developers happy!\u003C\u002Fli\u003E\u003C\u002Ful\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Ch2\u003E🦄\u003C\u002Fh2\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003Cdiv class=\"avatar\"\u003E\u003C\u002Fdiv\u003E\u003C\u002Fsection\u003E\u003Csection\u003E\u003C\u002Fsection\u003E\u003C\u002Farticle\u003E\u003Cscript src=\"index.js\"\u003E\u003C\u002Fscript\u003E";
	if (NODE_ENV !== 'production') {
	pug_html = pug_html + "\u003Cscript src=\"webpack-dev-server.js\"\u003E\u003C\u002Fscript\u003E";
	}
	pug_html = pug_html + "\u003C\u002Fbody\u003E\u003C\u002Fhtml\u003E";}.call(this,"NODE_ENV" in locals_for_with?locals_for_with.NODE_ENV:typeof NODE_ENV!=="undefined"?NODE_ENV:undefined));;return pug_html;};
	module.exports = template;

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

	'use strict';

	var pug_has_own_property = Object.prototype.hasOwnProperty;

	/**
	 * Merge two attribute objects giving precedence
	 * to values in object `b`. Classes are special-cased
	 * allowing for arrays and merging/joining appropriately
	 * resulting in a string.
	 *
	 * @param {Object} a
	 * @param {Object} b
	 * @return {Object} a
	 * @api private
	 */

	exports.merge = pug_merge;
	function pug_merge(a, b) {
	  if (arguments.length === 1) {
	    var attrs = a[0];
	    for (var i = 1; i < a.length; i++) {
	      attrs = pug_merge(attrs, a[i]);
	    }
	    return attrs;
	  }

	  for (var key in b) {
	    if (key === 'class') {
	      var valA = a[key] || [];
	      a[key] = (Array.isArray(valA) ? valA : [valA]).concat(b[key] || []);
	    } else if (key === 'style') {
	      var valA = pug_style(a[key]);
	      var valB = pug_style(b[key]);
	      a[key] = valA + valB;
	    } else {
	      a[key] = b[key];
	    }
	  }

	  return a;
	};

	/**
	 * Process array, object, or string as a string of classes delimited by a space.
	 *
	 * If `val` is an array, all members of it and its subarrays are counted as
	 * classes. If `escaping` is an array, then whether or not the item in `val` is
	 * escaped depends on the corresponding item in `escaping`. If `escaping` is
	 * not an array, no escaping is done.
	 *
	 * If `val` is an object, all the keys whose value is truthy are counted as
	 * classes. No escaping is done.
	 *
	 * If `val` is a string, it is counted as a class. No escaping is done.
	 *
	 * @param {(Array.<string>|Object.<string, boolean>|string)} val
	 * @param {?Array.<string>} escaping
	 * @return {String}
	 */
	exports.classes = pug_classes;
	function pug_classes_array(val, escaping) {
	  var classString = '', className, padding = '', escapeEnabled = Array.isArray(escaping);
	  for (var i = 0; i < val.length; i++) {
	    className = pug_classes(val[i]);
	    if (!className) continue;
	    escapeEnabled && escaping[i] && (className = pug_escape(className));
	    classString = classString + padding + className;
	    padding = ' ';
	  }
	  return classString;
	}
	function pug_classes_object(val) {
	  var classString = '', padding = '';
	  for (var key in val) {
	    if (key && val[key] && pug_has_own_property.call(val, key)) {
	      classString = classString + padding + key;
	      padding = ' ';
	    }
	  }
	  return classString;
	}
	function pug_classes(val, escaping) {
	  if (Array.isArray(val)) {
	    return pug_classes_array(val, escaping);
	  } else if (val && typeof val === 'object') {
	    return pug_classes_object(val);
	  } else {
	    return val || '';
	  }
	}

	/**
	 * Convert object or string to a string of CSS styles delimited by a semicolon.
	 *
	 * @param {(Object.<string, string>|string)} val
	 * @return {String}
	 */

	exports.style = pug_style;
	function pug_style(val) {
	  if (!val) return '';
	  if (typeof val === 'object') {
	    var out = '';
	    for (var style in val) {
	      /* istanbul ignore else */
	      if (pug_has_own_property.call(val, style)) {
	        out = out + style + ':' + val[style] + ';';
	      }
	    }
	    return out;
	  } else {
	    val += '';
	    if (val[val.length - 1] !== ';') 
	      return val + ';';
	    return val;
	  }
	};

	/**
	 * Render the given attribute.
	 *
	 * @param {String} key
	 * @param {String} val
	 * @param {Boolean} escaped
	 * @param {Boolean} terse
	 * @return {String}
	 */
	exports.attr = pug_attr;
	function pug_attr(key, val, escaped, terse) {
	  if (val === false || val == null || !val && (key === 'class' || key === 'style')) {
	    return '';
	  }
	  if (val === true) {
	    return ' ' + (terse ? key : key + '="' + key + '"');
	  }
	  if (typeof val.toJSON === 'function') {
	    val = val.toJSON();
	  }
	  if (typeof val !== 'string') {
	    val = JSON.stringify(val);
	    if (!escaped && val.indexOf('"') !== -1) {
	      return ' ' + key + '=\'' + val.replace(/'/g, '&#39;') + '\'';
	    }
	  }
	  if (escaped) val = pug_escape(val);
	  return ' ' + key + '="' + val + '"';
	};

	/**
	 * Render the given attributes object.
	 *
	 * @param {Object} obj
	 * @param {Object} terse whether to use HTML5 terse boolean attributes
	 * @return {String}
	 */
	exports.attrs = pug_attrs;
	function pug_attrs(obj, terse){
	  var attrs = '';

	  for (var key in obj) {
	    if (pug_has_own_property.call(obj, key)) {
	      var val = obj[key];

	      if ('class' === key) {
	        val = pug_classes(val);
	        attrs = pug_attr(key, val, false, terse) + attrs;
	        continue;
	      }
	      if ('style' === key) {
	        val = pug_style(val);
	      }
	      attrs += pug_attr(key, val, false, terse);
	    }
	  }

	  return attrs;
	};

	/**
	 * Escape the given string of `html`.
	 *
	 * @param {String} html
	 * @return {String}
	 * @api private
	 */

	var pug_match_html = /["&<>]/;
	exports.escape = pug_escape;
	function pug_escape(_html){
	  var html = '' + _html;
	  var regexResult = pug_match_html.exec(html);
	  if (!regexResult) return _html;

	  var result = '';
	  var i, lastIndex, escape;
	  for (i = regexResult.index, lastIndex = 0; i < html.length; i++) {
	    switch (html.charCodeAt(i)) {
	      case 34: escape = '&quot;'; break;
	      case 38: escape = '&amp;'; break;
	      case 60: escape = '&lt;'; break;
	      case 62: escape = '&gt;'; break;
	      default: continue;
	    }
	    if (lastIndex !== i) result += html.substring(lastIndex, i);
	    lastIndex = i + 1;
	    result += escape;
	  }
	  if (lastIndex !== i) return result + html.substring(lastIndex, i);
	  else return result;
	};

	/**
	 * Re-throw the given `err` in context to the
	 * the pug in `filename` at the given `lineno`.
	 *
	 * @param {Error} err
	 * @param {String} filename
	 * @param {String} lineno
	 * @param {String} str original source
	 * @api private
	 */

	exports.rethrow = pug_rethrow;
	function pug_rethrow(err, filename, lineno, str){
	  if (!(err instanceof Error)) throw err;
	  if ((typeof window != 'undefined' || !filename) && !str) {
	    err.message += ' on line ' + lineno;
	    throw err;
	  }
	  try {
	    str = str || __webpack_require__(3).readFileSync(filename, 'utf8')
	  } catch (ex) {
	    pug_rethrow(err, null, lineno)
	  }
	  var context = 3
	    , lines = str.split('\n')
	    , start = Math.max(lineno - context, 0)
	    , end = Math.min(lines.length, lineno + context);

	  // Error context
	  var context = lines.slice(start, end).map(function(line, i){
	    var curr = i + start + 1;
	    return (curr == lineno ? '  > ' : '    ')
	      + curr
	      + '| '
	      + line;
	  }).join('\n');

	  // Alter exception message
	  err.path = filename;
	  err.message = (filename || 'Pug') + ':' + lineno
	    + '\n' + context + '\n\n' + err.message;
	  throw err;
	};


/***/ }),
/* 3 */
/***/ (function(module, exports) {

	/* (ignored) */

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "999f3c284535780dd38b6ec2195eabd0.m4v";

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__.p + "fb34682dedec66bd52a0647299924546.mp4";

/***/ })
/******/ ])
});
;