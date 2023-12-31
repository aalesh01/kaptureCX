(function ($) {
    $(function () {
        $('.js-carousel').slick({
            infinite: true,
            autoplay: true,
            autoplaySpeed: 4000,
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '.js-ag-carousel-arrow_prev',
            nextArrow: '.js-ag-carousel-arrow_next',
            responsive: [{
                breakpoint: 1600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 980,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }]
        });


    });
})(jQuery);

jQuery(function ($) {
    $('a.sywh-open-services').click(function () {
        if ($('.sywh-services').hasClass('active')) {
            $('.sywh-services').removeClass('active');
            $('a.sywh-open-services i.fa-times').hide();
            $('a.sywh-open-services i.fa-comments').show();
            $('a.sywh-open-services').removeClass('data-tooltip-hide');
            $('.sywh-services a:nth-child(1)').delay(0).fadeOut();
            $('.sywh-services a:nth-child(2)').delay(100).fadeOut();
            $('.sywh-services a:nth-child(3)').delay(200).fadeOut();
            $('.sywh-services a:nth-child(4)').delay(300).fadeOut();
            $('.sywh-services a:nth-child(5)').delay(400).fadeOut();
        } else {
            $('.sywh-services').addClass('active');
            $('a.sywh-open-services i.fa-comments').hide();
            $('a.sywh-open-services i.fa-times').show();
            $('a.sywh-open-services').addClass('data-tooltip-hide');
            $('.sywh-services a:nth-child(5)').delay(0).fadeIn();
            $('.sywh-services a:nth-child(4)').delay(100).fadeIn();
            $('.sywh-services a:nth-child(3)').delay(200).fadeIn();
            $('.sywh-services a:nth-child(2)').delay(300).fadeIn();
            $('.sywh-services a:nth-child(1)').delay(400).fadeIn();
        }
    });
});