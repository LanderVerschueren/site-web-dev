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

eval("$('.hamburger').click(function(event) {\r\n\tconsole.log(event);\r\n\t$('.enveloppe, .divider-top, .other').toggle( 'fast', function() {\r\n\t\t//$('nav').toggleClass('expanded');\r\n\t});\t\r\n\t$('nav').toggleClass('expanded');\r\n});\r\n\r\nvar slideIndex = 0;\r\nshowSlides();\r\n\r\nfunction showSlides() {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"mySlides\");\r\n    var dots = document.getElementsByClassName(\"dot\");\r\n    for (i = 0; i < slides.length; i++) {\r\n       slides[i].style.display = \"none\";  \r\n    }\r\n    slideIndex++;\r\n    if (slideIndex> slides.length) {slideIndex = 1}    \r\n    for (i = 0; i < dots.length; i++) {\r\n        dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n    }\r\n    slides[slideIndex-1].style.display = \"block\";  \r\n    dots[slideIndex-1].className += \" active\";\r\n    setTimeout(showSlides, 3000); // Change image every 3 seconds\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIiQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cdGNvbnNvbGUubG9nKGV2ZW50KTtcclxuXHQkKCcuZW52ZWxvcHBlLCAuZGl2aWRlci10b3AsIC5vdGhlcicpLnRvZ2dsZSggJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuXHRcdC8vJCgnbmF2JykudG9nZ2xlQ2xhc3MoJ2V4cGFuZGVkJyk7XHJcblx0fSk7XHRcclxuXHQkKCduYXYnKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcclxufSk7XHJcblxyXG52YXIgc2xpZGVJbmRleCA9IDA7XHJcbnNob3dTbGlkZXMoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMoKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICB2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkb3RcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXHJcbiAgICB9XHJcbiAgICBzbGlkZUluZGV4Kys7XHJcbiAgICBpZiAoc2xpZGVJbmRleD4gc2xpZGVzLmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfSAgICBcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuICAgIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDMwMDApOyAvLyBDaGFuZ2UgaW1hZ2UgZXZlcnkgMyBzZWNvbmRzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTsiLCJzb3VyY2VSb290IjoiIn0=");

/***/ }
/******/ ]);