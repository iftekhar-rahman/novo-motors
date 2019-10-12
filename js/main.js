jQuery(document).ready(function($){

    // $(".header-area").sticky({ topSpacing: 0 });

    // $('select').niceSelect();

    // if ($(window).width() < 991) {
    //     $(".testimonial-area").addClass("parallaxify");
    // }
    // else {
    //     $(".testimonial-area").removeClass("parallaxify");
    // }

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

    

    // $("#range_49").ionRangeSlider({
    //     type: "single",
    //     min: 150,
    //     max: 250,
    //     from: 200,
    //     to: 250,
    //     prefix: "£",
    //     step: 1,
    //     onFinish: function(data) {
    //         maxValue = data.from;
    //         alert("Your Value: " + maxValue);
    //     }
    // });


    // $(".logo-carousel-wrap").owlCarousel({
    //     items: 5,
    //     loop: true,
    //     nav: false,
    //     dots: false,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         580: {
    //             items: 3,
    //             margin: 3,
    //             nav: false
    //         },
    //         720: {
    //             items: 4,
    //             margin: 3,
    //             nav: false
    //         },
    //         960: {
    //             items: 5
    //         },
    //         1140: {
    //             items: 6
    //         }

    //     }
    // });

    // $(".feature-carousel-wrap").owlCarousel({
    //     items: 4,
    //     loop: true,
    //     nav: true,
    //     dots: true,
    //     autoplay: false,
    //     margin: 15,
    //     navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1,
    //             margin: 0,
    //             nav: false
    //         },
    //         481: {
    //             items: 2,
    //             margin: 15,
    //             nav: false
    //         },
    //         720: {
    //             items: 3,
    //             margin: 15,
    //             nav: false
    //         },
    //         960: {
    //             items: 3,
    //             margin: 25,
    //         },
    //         1140: {
    //             items: 4
    //         }

    //     }
    // });




	// $(".bodytype-carousel-wrap").magnificPopup({
	// 	type: 'image',
    //     gallery: {
    //         enabled: true
    //     }
	// });




    

    

});