jQuery(document).ready(function($){

    $('#menu').slicknav();

    // Sticky Header with smooth animation
    $(window).on('scroll', function() {
        if ($(window).scrollTop() >= 300) {
            $('.header-area').addClass('fixed');
        } else {
            $('.header-area').removeClass('fixed');
        }
    })

    // homepage-slides
	$(".homepage-slides").owlCarousel({
		items: 1,
		loop: true,
		nav: true,
		dots: true,
        autoplay: false,
        navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"]
    });
    
    // testimonial-wrap
	$(".testimonial-wrap").owlCarousel({
		items: 1,
		loop: true,
		nav: false,
		dots: true,
        autoplay: false,
        autoHeight: true,
    });
    
    // Scroll To Top
    var scrollTop = $(".scrollTop");

    $(window).scroll(function() {
    var topPos = $(this).scrollTop();

    if (topPos > 100) {
        $(scrollTop).css("bottom", "55px");
    } else {
        $(scrollTop).css("bottom", "-45px");
    }

    }); // scroll END

    $(scrollTop).click(function() {
    $('html, body').animate({
        scrollTop: 0
    }, 800);
    return false;

    }); // click() scroll top EMD

    

    




    

    

});