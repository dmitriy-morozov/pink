$(document).ready(function () {
    $(".price__item, .reviews__item, .slider2, .slider").removeClass("slider--no-js");

    $('.slider').slick({
        "speed": 300,
        "autoplay": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "arrows": false,
        "dots": true,
        "dotsClass": "bullets"
    });

    $('.reviews .prev').on('click', function () {
        $('.slider').slick("slickPrev");
    });

    $('.reviews .next').on('click', function () {
        $('.slider').slick("slickNext");
    });
});


$(document).ready(slider2);
$(window).on('resize', slider2);

function slider2() {
    var slickOpts = {
        "speed": 300,
        "autoplay": true,
        "slidesToShow": 1,
        "slidesToScroll": 1,
        "arrows": false
    };

    $('.slider2').not('.slick-initialized').slick(slickOpts);

    if ($(window).width() > 699) {
        $('.slider2')[0].slick.unslick();
    } else {
        $('.slider2').slick(slickOpts);
    }

    $('.price .prev').on('click', function () {
        $('.slider2').slick("slickPrev");
    });

    $('.price .next').on('click', function () {
        $('.slider2').slick("slickNext");
    });
}