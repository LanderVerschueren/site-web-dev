/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.l = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// identity function for calling harmory imports with the correct context
/******/ 	__webpack_require__.i = function(value) { return value; };

/******/ 	// define getter function for harmory exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		Object.defineProperty(exports, name, {
/******/ 			configurable: false,
/******/ 			enumerable: true,
/******/ 			get: getter
/******/ 		});
/******/ 	};

/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};

/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports) {

eval("$('.hamburger').click(function(event) {\n\tconsole.log(event);\n\t$('.enveloppe, .divider-top, .other').toggle( 'fast', function() {\n\t\t//$('nav').toggleClass('expanded');\n\t});\t\n\t$('nav').toggleClass('expanded');\n});\n\nvar slideIndex = 0;\nshowSlides();\n\nfunction showSlides() {\n    var i;\n    var slides = document.getElementsByClassName(\"mySlides\");\n    var dots = document.getElementsByClassName(\"dot\");\n    for (i = 0; i < slides.length; i++) {\n       slides[i].style.display = \"none\";  \n    }\n    slideIndex++;\n    if (slideIndex> slides.length) {slideIndex = 1}    \n    for (i = 0; i < dots.length; i++) {\n        dots[i].className = dots[i].className.replace(\" active\", \"\");\n    }\n    slides[slideIndex-1].style.display = \"block\";  \n    dots[slideIndex-1].className += \" active\";\n    setTimeout(showSlides, 3000); // Change image every 3 seconds\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIiQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbihldmVudCkge1xuXHRjb25zb2xlLmxvZyhldmVudCk7XG5cdCQoJy5lbnZlbG9wcGUsIC5kaXZpZGVyLXRvcCwgLm90aGVyJykudG9nZ2xlKCAnZmFzdCcsIGZ1bmN0aW9uKCkge1xuXHRcdC8vJCgnbmF2JykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJyk7XG5cdH0pO1x0XG5cdCQoJ25hdicpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcpO1xufSk7XG5cbnZhciBzbGlkZUluZGV4ID0gMDtcbnNob3dTbGlkZXMoKTtcblxuZnVuY3Rpb24gc2hvd1NsaWRlcygpIHtcbiAgICB2YXIgaTtcbiAgICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xuICAgIHZhciBkb3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImRvdFwiKTtcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxuICAgIH1cbiAgICBzbGlkZUluZGV4Kys7XG4gICAgaWYgKHNsaWRlSW5kZXg+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX0gICAgXG4gICAgZm9yIChpID0gMDsgaSA8IGRvdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcbiAgICB9XG4gICAgc2xpZGVzW3NsaWRlSW5kZXgtMV0uc3R5bGUuZGlzcGxheSA9IFwiYmxvY2tcIjsgIFxuICAgIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XG4gICAgc2V0VGltZW91dChzaG93U2xpZGVzLCAzMDAwKTsgLy8gQ2hhbmdlIGltYWdlIGV2ZXJ5IDMgc2Vjb25kc1xufVxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyByZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcyJdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);