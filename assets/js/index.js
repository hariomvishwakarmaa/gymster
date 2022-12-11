// page hide show 
$(document).ready(function() {
    $(".dropdown ").click(function() {
        $(".toggle-click ").toggle();
    });
});

// toggle hide show
$(document).ready(function() {
    $(".hamburger-toggle ").click(function() {
        $(".responsive-navbar ").toggle(1000);
    });
});

// slick slider for image banner
$(document).ready(function() {
    $('.main-image-banner').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1800,
        infinite: true,
        autoplaySpeed: 5000,
        autoplay: false,
    });
});

// about button
$(document).ready(function() {
    $('.link-about-us1').on('click', function() {
        $(this).addClass('is-active');
        $(".about-peragraph").hide();
        $(".about-peragraph1").show();
        $('.link-about-us').removeClass('is-active');
    });
});

$(document).ready(function() {
    $('.link-about-us').on('click', function() {
        $(this).addClass('is-active');
        $(".about-peragraph1").hide();
        $(".about-peragraph").show();
        $('.link-about-us1').removeClass('is-active');
    });
});

// end about button

// week day change
$(document).ready(function() {
    $('.week-day-name').on('click', function() {
        $(this).addClass('active-day-name');
        $('.week-day-name').removeClass('active-day-name');
        $(this).addClass('active-day-name');
    });
});

$(document).ready(function() {
    $(".week-day-name").click(function() {
        $(".main-container-time-name-teacher").fadeOut();
        $(".main-container-time-name-teacher").fadeIn();
    });
});

// timer counter
$(document).ready(function() {
    setTimeout(function() {
        odometer.innerHTML = 12345;
        odometer_1.innerHTML = 12345;
        odometer_2.innerHTML = 12345;
        odometer_3.innerHTML = 12345; //ending number
    }, 1000); //last argument is for time in milliseconds or seconds depending on the need
});

$(document).ready(function() {
    $('.main-testimonial-slider').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        dots: true,
        speed: 1800,
        infinite: true,
        // prevArrow: "<button><i class='fa fa-long-arrow-right'></i></button>",
        // nextArrow: "<button><i class='fa fa-long-arrow-left'></i></button>",
        autoplaySpeed: 5000,
        autoplay: false,
    });
});