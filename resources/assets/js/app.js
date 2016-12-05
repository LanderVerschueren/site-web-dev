
/**
 * First we will load all of this project's JavaScript dependencies which
 * include Vue and Vue Resource. This gives a great starting point for
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the body of the page. From here, you may begin adding components to
 * the application, or feel free to tweak this setup for your needs.
 */

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});


$('.hamburger').click(function(event) {
	console.log(event);
	if( $('nav').hasClass('expanded') ) {
		$('nav').animate({width: '60px'}, 'fast', function() {
			$('.enveloppe, .other, .divider-top').hide('fast');
			$('hr').animate({width: '48px'}, 'fast');
		});
		
		/*$('.enveloppe, .other, .divider-top').hide('fast', function() {
			$('nav').animate({width: '60px'}, 'fast');
			$('hr').animate({width: '48px'}, 'fast');
		});*/
	} else {
		/*$('.enveloppe, .other, .divider-top').show('fast', function() {
			$('hr').animate({width: '205px'}, 'fast');
			$('nav').animate({width: '217px'}, 'fast');
		});*/

		$('hr').animate({width: '205px'}, 'fast', function() {
			$('.enveloppe, .other, .divider-top').show('fast');
			$('nav').animate({width: '217px'}, 'fast');
		});
	}
	$('nav').toggleClass('expanded');
});