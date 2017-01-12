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

eval("/*$('.hamburger').click(function(event) {\r\n\t$('.enveloppe').toggle( 'fast', function() {\r\n        $('nav').toggleClass('expanded');\r\n        console.log('test');\r\n\r\n        if ($('.favicon')[0].innerHTML == \"K\") {\r\n            $('.favicon')[0].innerHTML = \"Kowloon\";\r\n        } else {\r\n            $('.favicon')[0].innerHTML = \"K\";\r\n        }\r\n\t});    \r\n});*/\r\n$('.hamburger').click(function(event) {\r\n\r\n    $('nav').toggleClass('expanded', function() {\r\n        if ($('.favicon-text')[0].innerHTML == \"K\") {\r\n            $('.favicon-text')[0].innerHTML = \"Kowloon\";\r\n        } else {\r\n            $('.favicon-text')[0].innerHTML = \"K\";\r\n        }\r\n    });\r\n});\r\n\r\n$('.question').click(function(event) {\r\n    event.preventDefault();\r\n\r\n    $('.inner-filter').toggle();\r\n    console.log('test');\r\n});\r\n\r\n$('.faq-article-top').click(function(event) {\r\n    $('.faq-article').toggleClass('open');\r\n    $('.faq-article').toggleClass('closed');\r\n\r\n    $('.arrow').toggleClass('arrow-right');\r\n    $('.arrow').toggleClass('arrow-down');\r\n});\r\n\r\n$('.product-filter-top').click(function(event) {\r\n    $('.product-filter').toggleClass('open');\r\n    $('.product-filter').toggleClass('closed');\r\n\r\n    $('.arrow').toggleClass('arrow-right');\r\n    $('.arrow').toggleClass('arrow-down');\r\n});\r\n\r\n\r\n$( \"#slider-range\" ).slider({\r\n    range: true,\r\n    min: 0,\r\n    max: 500,\r\n    values: [ 75, 300 ],\r\n    slide: function( event, ui ) {\r\n        $( \"#amount-left\" ).val( \"€\" + ui.values[ 0 ]);\r\n        $( \"#amount-right\" ).val( \"€\" + ui.values[ 1 ]);\r\n    }\r\n});\r\n\r\n$( \"#amount-left\" ).val( \"€\" + $( \"#slider-range\" ).slider( \"values\", 0 ));\r\n$( \"#amount-right\" ).val( \"€\" + $( \"#slider-range\" ).slider( \"values\", 1 ));\r\n\r\n$('#slider-range').css({width: '390px'});\r\n\r\n/*$('.product-view-list').jscroll({\r\n    debug: true,\r\n    loadingHtml: '<img src=\"/images/loading_white.gif\" alt=\"Loading\" />',\r\n    padding: 20\r\n});*/\r\n\r\n$('.flexslider').flexslider({\r\n    animation: \"slide\",\r\n    controlNav: \"thumbnails\"\r\n  });\r\n\r\nvar slideIndex = 0;\r\nshowSlides();\r\n\r\nfunction showSlides() {\r\n    var i;\r\n    var slides = document.getElementsByClassName(\"mySlides\");\r\n    var dots = document.getElementsByClassName(\"dot\");\r\n    for (i = 0; i < slides.length; i++) {\r\n       slides[i].style.display = \"none\";  \r\n    }\r\n    slideIndex++;\r\n    if (slideIndex> slides.length) {slideIndex = 1}    \r\n    for (i = 0; i < dots.length; i++) {\r\n        dots[i].className = dots[i].className.replace(\" active\", \"\");\r\n    }\r\n    slides[slideIndex-1].style.display = \"block\";  \r\n    dots[slideIndex-1].className += \" active\";\r\n    setTimeout(showSlides, 3000); // Change image every 3 seconds\r\n}//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMC5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9yZXNvdXJjZXMvYXNzZXRzL2pzL2FwcC5qcz84YjY3Il0sInNvdXJjZXNDb250ZW50IjpbIi8qJCgnLmhhbWJ1cmdlcicpLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KSB7XHJcblx0JCgnLmVudmVsb3BwZScpLnRvZ2dsZSggJ2Zhc3QnLCBmdW5jdGlvbigpIHtcclxuICAgICAgICAkKCduYXYnKS50b2dnbGVDbGFzcygnZXhwYW5kZWQnKTtcclxuICAgICAgICBjb25zb2xlLmxvZygndGVzdCcpO1xyXG5cclxuICAgICAgICBpZiAoJCgnLmZhdmljb24nKVswXS5pbm5lckhUTUwgPT0gXCJLXCIpIHtcclxuICAgICAgICAgICAgJCgnLmZhdmljb24nKVswXS5pbm5lckhUTUwgPSBcIktvd2xvb25cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuZmF2aWNvbicpWzBdLmlubmVySFRNTCA9IFwiS1wiO1xyXG4gICAgICAgIH1cclxuXHR9KTsgICAgXHJcbn0pOyovXHJcbiQoJy5oYW1idXJnZXInKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG5cclxuICAgICQoJ25hdicpLnRvZ2dsZUNsYXNzKCdleHBhbmRlZCcsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIGlmICgkKCcuZmF2aWNvbi10ZXh0JylbMF0uaW5uZXJIVE1MID09IFwiS1wiKSB7XHJcbiAgICAgICAgICAgICQoJy5mYXZpY29uLXRleHQnKVswXS5pbm5lckhUTUwgPSBcIktvd2xvb25cIjtcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAkKCcuZmF2aWNvbi10ZXh0JylbMF0uaW5uZXJIVE1MID0gXCJLXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfSk7XHJcbn0pO1xyXG5cclxuJCgnLnF1ZXN0aW9uJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgJCgnLmlubmVyLWZpbHRlcicpLnRvZ2dsZSgpO1xyXG4gICAgY29uc29sZS5sb2coJ3Rlc3QnKTtcclxufSk7XHJcblxyXG4kKCcuZmFxLWFydGljbGUtdG9wJykuY2xpY2soZnVuY3Rpb24oZXZlbnQpIHtcclxuICAgICQoJy5mYXEtYXJ0aWNsZScpLnRvZ2dsZUNsYXNzKCdvcGVuJyk7XHJcbiAgICAkKCcuZmFxLWFydGljbGUnKS50b2dnbGVDbGFzcygnY2xvc2VkJyk7XHJcblxyXG4gICAgJCgnLmFycm93JykudG9nZ2xlQ2xhc3MoJ2Fycm93LXJpZ2h0Jyk7XHJcbiAgICAkKCcuYXJyb3cnKS50b2dnbGVDbGFzcygnYXJyb3ctZG93bicpO1xyXG59KTtcclxuXHJcbiQoJy5wcm9kdWN0LWZpbHRlci10b3AnKS5jbGljayhmdW5jdGlvbihldmVudCkge1xyXG4gICAgJCgnLnByb2R1Y3QtZmlsdGVyJykudG9nZ2xlQ2xhc3MoJ29wZW4nKTtcclxuICAgICQoJy5wcm9kdWN0LWZpbHRlcicpLnRvZ2dsZUNsYXNzKCdjbG9zZWQnKTtcclxuXHJcbiAgICAkKCcuYXJyb3cnKS50b2dnbGVDbGFzcygnYXJyb3ctcmlnaHQnKTtcclxuICAgICQoJy5hcnJvdycpLnRvZ2dsZUNsYXNzKCdhcnJvdy1kb3duJyk7XHJcbn0pO1xyXG5cclxuXHJcbiQoIFwiI3NsaWRlci1yYW5nZVwiICkuc2xpZGVyKHtcclxuICAgIHJhbmdlOiB0cnVlLFxyXG4gICAgbWluOiAwLFxyXG4gICAgbWF4OiA1MDAsXHJcbiAgICB2YWx1ZXM6IFsgNzUsIDMwMCBdLFxyXG4gICAgc2xpZGU6IGZ1bmN0aW9uKCBldmVudCwgdWkgKSB7XHJcbiAgICAgICAgJCggXCIjYW1vdW50LWxlZnRcIiApLnZhbCggXCLigqxcIiArIHVpLnZhbHVlc1sgMCBdKTtcclxuICAgICAgICAkKCBcIiNhbW91bnQtcmlnaHRcIiApLnZhbCggXCLigqxcIiArIHVpLnZhbHVlc1sgMSBdKTtcclxuICAgIH1cclxufSk7XHJcblxyXG4kKCBcIiNhbW91bnQtbGVmdFwiICkudmFsKCBcIuKCrFwiICsgJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDAgKSk7XHJcbiQoIFwiI2Ftb3VudC1yaWdodFwiICkudmFsKCBcIuKCrFwiICsgJCggXCIjc2xpZGVyLXJhbmdlXCIgKS5zbGlkZXIoIFwidmFsdWVzXCIsIDEgKSk7XHJcblxyXG4kKCcjc2xpZGVyLXJhbmdlJykuY3NzKHt3aWR0aDogJzM5MHB4J30pO1xyXG5cclxuLyokKCcucHJvZHVjdC12aWV3LWxpc3QnKS5qc2Nyb2xsKHtcclxuICAgIGRlYnVnOiB0cnVlLFxyXG4gICAgbG9hZGluZ0h0bWw6ICc8aW1nIHNyYz1cIi9pbWFnZXMvbG9hZGluZ193aGl0ZS5naWZcIiBhbHQ9XCJMb2FkaW5nXCIgLz4nLFxyXG4gICAgcGFkZGluZzogMjBcclxufSk7Ki9cclxuXHJcbiQoJy5mbGV4c2xpZGVyJykuZmxleHNsaWRlcih7XHJcbiAgICBhbmltYXRpb246IFwic2xpZGVcIixcclxuICAgIGNvbnRyb2xOYXY6IFwidGh1bWJuYWlsc1wiXHJcbiAgfSk7XHJcblxyXG52YXIgc2xpZGVJbmRleCA9IDA7XHJcbnNob3dTbGlkZXMoKTtcclxuXHJcbmZ1bmN0aW9uIHNob3dTbGlkZXMoKSB7XHJcbiAgICB2YXIgaTtcclxuICAgIHZhciBzbGlkZXMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwibXlTbGlkZXNcIik7XHJcbiAgICB2YXIgZG90cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJkb3RcIik7XHJcbiAgICBmb3IgKGkgPSAwOyBpIDwgc2xpZGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICBzbGlkZXNbaV0uc3R5bGUuZGlzcGxheSA9IFwibm9uZVwiOyAgXHJcbiAgICB9XHJcbiAgICBzbGlkZUluZGV4Kys7XHJcbiAgICBpZiAoc2xpZGVJbmRleD4gc2xpZGVzLmxlbmd0aCkge3NsaWRlSW5kZXggPSAxfSAgICBcclxuICAgIGZvciAoaSA9IDA7IGkgPCBkb3RzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgZG90c1tpXS5jbGFzc05hbWUgPSBkb3RzW2ldLmNsYXNzTmFtZS5yZXBsYWNlKFwiIGFjdGl2ZVwiLCBcIlwiKTtcclxuICAgIH1cclxuICAgIHNsaWRlc1tzbGlkZUluZGV4LTFdLnN0eWxlLmRpc3BsYXkgPSBcImJsb2NrXCI7ICBcclxuICAgIGRvdHNbc2xpZGVJbmRleC0xXS5jbGFzc05hbWUgKz0gXCIgYWN0aXZlXCI7XHJcbiAgICBzZXRUaW1lb3V0KHNob3dTbGlkZXMsIDMwMDApOyAvLyBDaGFuZ2UgaW1hZ2UgZXZlcnkgMyBzZWNvbmRzXHJcbn1cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gcmVzb3VyY2VzL2Fzc2V0cy9qcy9hcHAuanMiXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7Ozs7Ozs7QUFZQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7QUFPQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOyIsInNvdXJjZVJvb3QiOiIifQ==");

/***/ }
/******/ ]);