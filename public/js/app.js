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

eval("/*$('.hamburger').click(function(event) {\r\n\t$('.enveloppe').toggle( 'fast', function() {\r\n        $('nav').toggleClass('expanded');\r\n        console.log('test');\r\n\r\n        if ($('.favicon')[0].innerHTML == \"K\") {\r\n            $('.favicon')[0].innerHTML = \"Kowloon\";\r\n        } else {\r\n            $('.favicon')[0].innerHTML = \"K\";\r\n        }\r\n\t});    \r\n});*/\r\n$('.hamburger').click(function(event) {\r\n\r\n    $('nav').toggleClass('expanded', function() {\r\n        if ($('.favicon-text')[0].innerHTML == \"K\") {\r\n            $('.favicon-text')[0].innerHTML = \"Kowloon\";\r\n        } else {\r\n            $('.favicon-text')[0].innerHTML = \"K\";\r\n        }\r\n    });\r\n});\r\n\r\n$('.question').click(function(event) {\r\n    event.preventDefault();\r\n\r\n    $('.inner-filter').css({display: 'flex'});\r\n});\r\n\r\n$('.faq-article-top').click(function(event) {\r\n    $('.faq-article').toggleClass('open');\r\n    $('.faq-article').toggleClass('closed');\r\n\r\n    $('.arrow').toggleClass('arrow-right');\r\n    $('.arrow').toggleClass('arrow-down');\r\n});\r\n\r\n$('.product-filter-top').click(function(event) {\r\n    $('.product-filter').toggleClass('open');\r\n    $('.product-filter').toggleClass('closed');\r\n\r\n    $('.arrow').toggleClass('arrow-right');\r\n    $('.arrow').toggleClass('arrow-down');\r\n});\r\n\r\n\r\n$( \"#slider-range\" ).slider({\r\n    range: true,\r\n    min: 0,\r\n    max: 500,\r\n    values: [ 75, 300 ],\r\n    slide: function( event, ui ) {\r\n        $( \"#amount-left\" ).val( \"€\" + ui.values[ 0 ]);\r\n        $( \"#amount-right\" ).val( \"€\" + ui.values[ 1 ]);\r\n    }\r\n});\r\n\r\n$( \"#amount-left\" ).val( \"€\" + $( \"#slider-range\" ).slider( \"values\", 0 ));\r\n$( \"#amount-right\" ).val( \"€\" + $( \"#slider-range\" ).slider( \"values\", 1 ));\r\n\r\n$('#slider-range').css({width: '390px'});\r\n\r\n/*$('.product-view-list').jscroll({\r\n    debug: true,\r\n    loadingHtml: '<img src=\"/images/loading_white.gif\" alt=\"Loading\" />',\r\n    padding: 20\r\n});*/\r\n\r\n$('.flexslider').flexslider({\r\n    animation: \"slide\",\r\n    controlNav: \"thumbnails\"\r\n  });\r\n\r\nvar slideIndex = 0;\r\nshowSlides();\r\n\r\nfunction showSlides() {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"mySlides\");\r\n    var dots = document.getElementsByClassName(\"dot\");\r\n    for (i = 0; i < slides.length; i++) {\r\n       slides[i].style.display = \"none\";  \r\n    }\r\n    slideIndex++;\r\n    if (slideIndex> slides.length) {slideIndex = 1}    \r\n    for (i = 0; i < dots.length; i++) {\r\n        dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n    }\r\n    slides[slideIndex-1].style.display = \"block\";  \r\n    dots[slideIndex-1].className += \" active\";\r\n    setTimeout(showSlides, 3000); // Change image every 3 seconds\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0JCgnLmVudmVsb3BwZScpLnRvZ2dsZSggJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCduYXYnKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cclxuICAgICAgICBpZiAoJCgnLmZhdmljb24nKVswXS5pbm5lckhUTUwgPT0gXCJLXCIpIHtcclxuICAgICAgICAgICAgJCgnLmZhdmljb24nKVswXS5pbm5lckhUTUwgPSBcIktvd2xvb25cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuZmF2aWNvbicpWzBdLmlubmVySFRNTCA9IFwiS1wiO1xyXG4gICAgICAgIH1cclxuXHR9KTsgICAgXHJcbn0pOyovXHJcbiQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICQoJ25hdicpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcuZmF2aWNvbi10ZXh0JylbMF0uaW5uZXJIVE1MID09IFwiS1wiKSB7XHJcbiAgICAgICAgICAgICQoJy5mYXZpY29uLXRleHQnKVswXS5pbm5lckhUTUwgPSBcIktvd2xvb25cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuZmF2aWNvbi10ZXh0JylbMF0uaW5uZXJIVE1MID0gXCJLXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJCgnLnF1ZXN0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnLmlubmVyLWZpbHRlcicpLmNzcyh7ZGlzcGxheTogJ2ZsZXgnfSk7XHJcbn0pO1xyXG5cclxuJCgnLmZhcS1hcnRpY2xlLXRvcCcpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcbiAgICAkKCcuZmFxLWFydGljbGUnKS50b2dnbGVDbGFzcygnb3BlbicpO1xyXG4gICAgJCgnLmZhcS1hcnRpY2xlJykudG9nZ2xlQ2xhc3MoJ2Nsb3NlZCcpO1xyXG5cclxuICAgICQoJy5hcnJvdycpLnRvZ2dsZUNsYXNzKCdhcnJvdy1yaWdodCcpO1xyXG4gICAgJCgnLmFycm93JykudG9nZ2xlQ2xhc3MoJ2Fycm93LWRvd24nKTtcclxufSk7XHJcblxyXG4kKCcucHJvZHVjdC1maWx0ZXItdG9wJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQoJy5wcm9kdWN0LWZpbHRlcicpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCcucHJvZHVjdC1maWx0ZXInKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcblxyXG4gICAgJCgnLmFycm93JykudG9nZ2xlQ2xhc3MoJ2Fycm93LXJpZ2h0Jyk7XHJcbiAgICAkKCcuYXJyb3cnKS50b2dnbGVDbGFzcygnYXJyb3ctZG93bicpO1xyXG59KTtcclxuXHJcblxyXG4kKCBcIiNzbGlkZXItcmFuZ2VcIiApLnNsaWRlcih7XHJcbiAgICByYW5nZTogdHJ1ZSxcclxuICAgIG1pbjogMCxcclxuICAgIG1heDogNTAwLFxyXG4gICAgdmFsdWVzOiBbIDc1LCAzMDAgXSxcclxuICAgIHNsaWRlOiBmdW5jdGlvbiggZXZlbnQsIHVpICkge1xyXG4gICAgICAgICQoIFwiI2Ftb3VudC1sZWZ0XCIgKS52YWwoIFwi4oKsXCIgKyB1aS52YWx1ZXNbIDAgXSk7XHJcbiAgICAgICAgJCggXCIjYW1vdW50LXJpZ2h0XCIgKS52YWwoIFwi4oKsXCIgKyB1aS52YWx1ZXNbIDEgXSk7XHJcbiAgICB9XHJcbn0pO1xyXG5cclxuJCggXCIjYW1vdW50LWxlZnRcIiApLnZhbCggXCLigqxcIiArICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAwICkpO1xyXG4kKCBcIiNhbW91bnQtcmlnaHRcIiApLnZhbCggXCLigqxcIiArICQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKCBcInZhbHVlc1wiLCAxICkpO1xyXG5cclxuJCgnI3NsaWRlci1yYW5nZScpLmNzcyh7d2lkdGg6ICczOTBweCd9KTtcclxuXHJcbi8qJCgnLnByb2R1Y3Qtdmlldy1saXN0JykuanNjcm9sbCh7XHJcbiAgICBkZWJ1ZzogdHJ1ZSxcclxuICAgIGxvYWRpbmdIdG1sOiAnPGltZyBzcmM9XCIvaW1hZ2VzL2xvYWRpbmdfd2hpdGUuZ2lmXCIgYWx0PVwiTG9hZGluZ1wiIC8+JyxcclxuICAgIHBhZGRpbmc6IDIwXHJcbn0pOyovXHJcblxyXG4kKCcuZmxleHNsaWRlcicpLmZsZXhzbGlkZXIoe1xyXG4gICAgYW5pbWF0aW9uOiBcInNsaWRlXCIsXHJcbiAgICBjb250cm9sTmF2OiBcInRodW1ibmFpbHNcIlxyXG4gIH0pO1xyXG5cclxudmFyIHNsaWRlSW5kZXggPSAwO1xyXG5zaG93U2xpZGVzKCk7XHJcblxyXG5mdW5jdGlvbiBzaG93U2xpZGVzKCkge1xyXG4gICAgdmFyIGk7XHJcbiAgICB2YXIgc2xpZGVzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcIm15U2xpZGVzXCIpO1xyXG4gICAgdmFyIGRvdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwiZG90XCIpO1xyXG4gICAgZm9yIChpID0gMDsgaSA8IHNsaWRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgc2xpZGVzW2ldLnN0eWxlLmRpc3BsYXkgPSBcIm5vbmVcIjsgIFxyXG4gICAgfVxyXG4gICAgc2xpZGVJbmRleCsrO1xyXG4gICAgaWYgKHNsaWRlSW5kZXg+IHNsaWRlcy5sZW5ndGgpIHtzbGlkZUluZGV4ID0gMX0gICAgXHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgZG90cy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGRvdHNbaV0uY2xhc3NOYW1lID0gZG90c1tpXS5jbGFzc05hbWUucmVwbGFjZShcIiBhY3RpdmVcIiwgXCJcIik7XHJcbiAgICB9XHJcbiAgICBzbGlkZXNbc2xpZGVJbmRleC0xXS5zdHlsZS5kaXNwbGF5ID0gXCJibG9ja1wiOyAgXHJcbiAgICBkb3RzW3NsaWRlSW5kZXgtMV0uY2xhc3NOYW1lICs9IFwiIGFjdGl2ZVwiO1xyXG4gICAgc2V0VGltZW91dChzaG93U2xpZGVzLCAzMDAwKTsgLy8gQ2hhbmdlIGltYWdlIGV2ZXJ5IDMgc2Vjb25kc1xyXG59XG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIHJlc291cmNlcy9hc3NldHMvanMvYXBwLmpzIl0sIm1hcHBpbmdzIjoiQUFBQTs7Ozs7Ozs7Ozs7O0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7OztBQU9BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9");

/***/ }
/******/ ]);