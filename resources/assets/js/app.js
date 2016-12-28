$('.hamburger').click(function(event) {
	console.log(event);
	$('.enveloppe, .divider-top, .other').toggle( 'fast', function() {
		$('nav').toggleClass('expanded');
	});	
});

$('.carousel.carousel-slider').carousel({
	full_width: true
});