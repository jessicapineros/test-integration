

//menu responsive
$(".nb-responsive").toggle();
$(".burger").click(function () {
    $(".nb-responsive").toggle("slow");
});

//slider
$('.slider').slick({
    dots: true,
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 4000,
    mobileFirst: true,
    pauseOnFocus: false,
    pauseOnHover: false
});


