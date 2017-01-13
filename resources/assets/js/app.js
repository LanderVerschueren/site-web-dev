/*$('.hamburger').click(function(event) {
	$('.enveloppe').toggle( 'fast', function() {
        $('nav').toggleClass('expanded');
        console.log('test');

        if ($('.favicon')[0].innerHTML == "K") {
            $('.favicon')[0].innerHTML = "Kowloon";
        } else {
            $('.favicon')[0].innerHTML = "K";
        }
	});    
});*/
$('.hamburger').click(function(event) {

    $('nav').toggleClass('expanded', function() {
        if ($('.favicon-text')[0].innerHTML == "K") {
            $('.favicon-text')[0].innerHTML = "Kowloon";
        } else {
            $('.favicon-text')[0].innerHTML = "K";
        }
    });
});

$('.question').click(function(event) {
    event.preventDefault();

    $('.inner-filter').css({display: 'flex'});
});

$('.faq-article-top').click(function(event) {
    $('.faq-article').toggleClass('open');
    $('.faq-article').toggleClass('closed');

    $('.arrow').toggleClass('arrow-right');
    $('.arrow').toggleClass('arrow-down');
});

$('.product-filter-top').click(function(event) {
    $('.product-filter').toggleClass('open');
    $('.product-filter').toggleClass('closed');

    $('.arrow').toggleClass('arrow-right');
    $('.arrow').toggleClass('arrow-down');
});


$( "#slider-range" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
        $( "#amount-left" ).val( "€" + ui.values[ 0 ]);
        $( "#amount-right" ).val( "€" + ui.values[ 1 ]);
    }
});

$( "#amount-left" ).val( "€" + $( "#slider-range" ).slider( "values", 0 ));
$( "#amount-right" ).val( "€" + $( "#slider-range" ).slider( "values", 1 ));

$('#slider-range').css({width: '390px'});

/*$('.product-view-list').jscroll({
    debug: true,
    loadingHtml: '<img src="/images/loading_white.gif" alt="Loading" />',
    padding: 20
});*/

$('.flexslider').flexslider({
    animation: "slide",
    controlNav: "thumbnails"
  });

var slideIndex = 0;
showSlides();

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    for (i = 0; i < slides.length; i++) {
       slides[i].style.display = "none";  
    }
    slideIndex++;
    if (slideIndex> slides.length) {slideIndex = 1}    
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
    setTimeout(showSlides, 3000); // Change image every 3 seconds
}